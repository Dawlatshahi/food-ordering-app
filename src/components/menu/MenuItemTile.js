import AddToCartButton from '@/components/menu/AddToCartButton';

export default function MenuItemTile({ onAddToCart, ...item }) {
	const { image, description, name, basePrice, sizes, extraIngredientPrices } =
		item;
	const hasSizesOrExtras =
		sizes?.length > 0 || extraIngredientPrices?.length > 0;

	return (
		<div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all flex flex-col h-96">
			<div className="flex-grow">
				<div className="text-center">
					<img
						src={image}
						className="w-auto max-h-32 block mx-auto"
						alt="menu item"
					/>
				</div>
				<h4 className="font-semibold text-xl my-3">{name}</h4>
				<p className="text-gray-500 text-sm line-clamp-3">{description}</p>
			</div>
			<div className="mt-auto">
				<AddToCartButton
					image={image}
					hasSizesOrExtras={hasSizesOrExtras}
					onClick={onAddToCart}
					basePrice={basePrice}
				/>
			</div>
		</div>
	);
}
