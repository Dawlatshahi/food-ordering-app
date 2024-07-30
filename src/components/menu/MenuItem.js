export default function MenuItem() {
	return (
		<div className="bg-gray-100 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all ">
			<div className="text-center ">
				<img src="/pizza.png" alt="pizza" className="max-h-24 block mx-auto" />
			</div>

			<h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
			<p className="text-gray-500 text-sm">
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.{' '}
			</p>
			<button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
				Add to cart $12
			</button>
		</div>
	);
}
