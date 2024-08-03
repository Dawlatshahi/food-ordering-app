import clientPromise from '@/libs/mongoConnect';
import { User } from '@/models/User';
import { UserInfo } from '@/models/UserInfo';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

// Ensure you have a single mongoose connection instance
const connectToDatabase = async () => {
	if (mongoose.connection.readyState >= 1) {
		return;
	}
	await mongoose.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

export const authOptions = {
	secret: process.env.SECRET,
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'test@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				try {
					await connectToDatabase(); // Ensure connection is established
					const email = credentials?.email;
					const password = credentials?.password;

					if (!email || !password) {
						throw new Error('Email or password missing');
					}

					const user = await User.findOne({ email });
					if (user && bcrypt.compareSync(password, user.password)) {
						return user;
					}

					return null;
				} catch (error) {
					console.error('Error during authorization:', error);
					return null;
				}
			},
		}),
	],
};

export async function isAdmin() {
	try {
		const session = await getServerSession(authOptions);
		const userEmail = session?.user?.email;
		if (!userEmail) {
			return false;
		}
		await connectToDatabase(); // Ensure connection is established
		const userInfo = await UserInfo.findOne({ email: userEmail });
		if (!userInfo) {
			return false;
		}
		return userInfo.admin;
	} catch (error) {
		console.error('Error checking admin status:', error);
		return false;
	}
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
