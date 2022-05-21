import ProductCard from './ProductCard/ProductCard.js';

const AvailableProducts = () => {
	// may later try an API call to get the items from db...
	const DUMMY_PRODUCTS = [
		{
			id: 'p1',
			name: 'Product 1',
			description: 'This is product 1',
			color: 'Red',
			price: 25.00
		},
		{
			id: 'p2',
			name: 'Product 2',
			description: 'This is product 2',
			color: 'Yellow',
			price: 15.00
		},
		{
			id: 'p3',
			name: 'Product 3',
			description: 'This is product 3',
			color: 'Blue',
			price: 10.00
		},
		{
			id: 'p4',
			name: 'Product 4',
			description: 'This is product 4',
			color: 'Green',
			price: 5.00
		},
		{
			id: 'p5',
			name: 'Product 5',
			description: 'This is product 5',
			color: 'Red',
			price: 20.00
		},
		{
			id: 'p6',
			name: 'Product 6',
			description: 'This is product 6',
			color: 'Yellow',
			price: 15.00
		},
		{
			id: 'p7',
			name: 'Product 7',
			description: 'This is product 7',
			color: 'Blue',
			price: 10.00
		},
		{
			id: 'p8',
			name: 'Product 8',
			description: 'This is product 8',
			color: 'Green',
			price: 5.00
		},
	]

	return (
		DUMMY_PRODUCTS.map((product) => (
			<ProductCard
				key={product.id}
				id={product.id}
				name={product.name}
				description={product.description}
				color={product.color}
				price={product.price}
			/>
		))
	);
};

export default AvailableProducts;