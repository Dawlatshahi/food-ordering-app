import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';

export default function Home() {
	return (
		<>
			<Hero />
			<HomeMenu />
			<section className="text-center my-16" id="about">
				<SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
				<div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
					<p>
						Welcome to TR KEBAB, your go-to spot for authentic Turkish cuisine
						in Nicosia, Northern Cyprus. We’re dedicated to bringing you the
						rich, vibrant flavors of Turkey with every dish we serve.
					</p>
					<p>
						At TR KEBAB, we use only the freshest ingredients to craft our
						delicious kebabs and traditional Turkish dishes. From succulent lamb
						shish kebabs to juicy chicken döner and flavorful vegetarian
						options, our menu is designed to satisfy every palate.
					</p>
					<p>
						Our friendly staff is here to ensure you have an exceptional dining
						experience, blending excellent service with the warm hospitality of
						Turkey.
					</p>
					<p>
						Come visit TR KEBAB and enjoy a true taste of Turkey right here in
						Nicosia. We can’t wait to welcome you!
					</p>
				</div>
			</section>
			<section className="text-center my-8" id="contact">
				<SectionHeaders
					subHeader={"Don't hesitate"}
					mainHeader={'Contact us'}
				/>
				<div className="mt-8 max-w-xl mx-auto">
					<div className="flex flex-col items-center gap-4">
						<a
							className="text-4xl underline text-gray-500"
							href="tel:+905338383872"
						>
							+90 533 8383872
						</a>
						<a
							className="text-xl underline text-gray-500"
							href="mailto:info@trkebab.com"
						>
							info@trkebab.com
						</a>
						<p className="text-gray-500">
							123 Main Street, Nicosia, Northern Cyprus
						</p>
						{/* Map integration (optional) */}
						<div className="w-full h-64 mt-4">
							<iframe
								className="w-full h-full"
								src="https://www.google.com/maps/embed/v1/place?q=TR%20KEBAB,Nicosia,Northern%20Cyprus&key=AIzaSyA6SxDkVbP0kt__XBagNe4IO68_KxAtumY"
								allowFullScreen
								loading="lazy"
							></iframe>
						</div>

						{/* Contact form */}
						<div className="mt-8 w-full max-w-md mx-auto">
							<p className="text-lg font-semibold">Send us a message:</p>
							<form
								className="mt-4 flex flex-col gap-4"
								action="/send-message"
								method="POST"
							>
								<input
									className="p-2 border border-gray-300 rounded w-full"
									type="text"
									name="name"
									placeholder="Your Name"
									required
								/>
								<input
									className="p-2 border border-gray-300 rounded w-full"
									type="email"
									name="email"
									placeholder="Your Email"
									required
								/>
								<textarea
									className="p-2 border border-gray-300 rounded w-full"
									name="message"
									placeholder="Your Message"
									rows="4"
									required
								></textarea>
								<button
									className="p-2 bg-primary text-white rounded-lg"
									type="submit"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
