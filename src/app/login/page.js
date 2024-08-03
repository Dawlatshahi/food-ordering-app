'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginInProgress, setLoginInProgress] = useState(false);

	async function handleFormSubmit(ev) {
		ev.preventDefault();
		console.log('Submitting login form');
		setLoginInProgress(true);

		const result = await signIn('credentials', {
			email,
			password,
			redirect: false,
		});

		console.log('Sign-in result:', result);

		if (result.ok) {
			console.log('Login successful');
			// Note: result object typically doesn't include email or password
			// You have to manually log these values if needed
			console.log('Email:', email);
			console.log('Password:', password); // Be cautious with logging passwords
		} else {
			console.log('Login failed');
			console.error('Error:', result.error);
		}

		setLoginInProgress(false);
	}

	return (
		<section className="mt-8">
			<h1 className="text-center text-primary text-4xl mb-4">Login</h1>
			<form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
				<input
					type="email"
					name="email"
					placeholder="email"
					value={email}
					disabled={loginInProgress}
					onChange={(ev) => setEmail(ev.target.value)}
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					value={password}
					disabled={loginInProgress}
					onChange={(ev) => setPassword(ev.target.value)}
				/>
				<button disabled={loginInProgress} type="submit">
					Login
				</button>
				<div className="my-4 text-center text-gray-500">
					or login with provider
				</div>
				<button
					type="button"
					onClick={() => signIn('google', { redirect: false })}
					className="flex gap-4 justify-center"
				>
					<Image src={'/google.png'} alt={''} width={24} height={24} />
					Login with google
				</button>
			</form>
		</section>
	);
}
