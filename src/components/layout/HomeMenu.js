'use client';
import SectionHeaders from '@/components/layout/SectionHeaders';
import MenuItem from '@/components/menu/MenuItem';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomeMenu() {
	const [bestSellers, setBestSellers] = useState([]);
	useEffect(() => {
		fetch('/api/menu-items').then((res) => {
			res.json().then((menuItems) => {
				setBestSellers(menuItems.slice(-3));
			});
		});
	}, []);
	return (
		<section className="">
			{/* Hidden on small and medium devices, visible on large and above */}
			<div className="absolute left-0 right-0 w-full justify-start hidden lg:block">
				<div className="absolute left-0 -top-[70px] text-left -z-10">
					<Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
				</div>
				<div className="absolute -top-[180px] right-0 -z-10">
					<Image src={'/kebab2.png'} width={300} height={250} alt={'kebab'} />
				</div>
			</div>
			<div className="text-center mb-4">
				<SectionHeaders
					subHeader={'check out'}
					mainHeader={'Our Best Sellers'}
				/>
			</div>
			<div className="grid sm:grid-cols-3 gap-4">
				{bestSellers?.length > 0 &&
					bestSellers.map((item) => <MenuItem key={item._id} {...item} />)}
			</div>
		</section>
	);
}
