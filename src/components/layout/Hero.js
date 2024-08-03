import Right from '@/components/icons/Right';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className="hero md:mt-4">
			<div className="py-8 md:py-12">
				<h1 className="text-4xl font-semibold">
					Everything
					<br />
					is better
					<br />
					with a&nbsp;
					<span className="text-primary">KEBAB</span>
				</h1>
				<p className="my-6 text-gray-500 text-sm">
					Indulge in the Perfect Blend of Spices and Sizzle with Every Bite. Our
					Kebabs Are a Celebration of Flavor, Tradition, and Taste—A True Feast
					for the Senses!
				</p>
				<div className="flex gap-4 text-sm">
					<Link href="/menu" passHref>
						<button className="flex items-center bg-primary uppercase text-white px-4 py-2 rounded-full whitespace-nowrap">
							Order now
							<Right />
						</button>
					</Link>
					<button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold whitespace-nowrap">
						Learn more
						<Right />
					</button>
				</div>
			</div>
			<div className="relative hidden md:block">
				<Image
					src={'/hero1.png'}
					layout={'fill'}
					objectFit={'contain'}
					alt={'Kebab'}
				/>
			</div>
		</section>
	);
}
