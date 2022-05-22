import ProductCard from './ProductCard/ProductCard.js';

const AvailableProducts = (props) => {
	// Generate certain amount products here (and re-generate if dif. price selection)
	const DUMMY_PRODUCTS = [
		{
			id: 'p1',
			name: 'Product 1',
			description: 'Red as in hunger, danger, or whatever you want it to be honestly.',
			color: 'RED',
		},
		{
			id: 'p2',
			name: 'Product 2',
			description: 'Yellow like bigbird hehe.',
			color: 'YELLOW',
		},
		{
			id: 'p3',
			name: 'Product 3',
			description: 'Blue as in the ocean, been feeling blue lately?',
			color: 'BLUE',
		},
		{
			id: 'p4',
			name: 'Product 4',
			description: 'Green as in grass, you should probably touch grass btw.',
			color: 'GREEN',
		},
		{
			id: 'p5',
			name: 'Product 5',
			description: 'Purple as in yams',
			color: 'PURPLE',
		},
		{
			id: 'p6',
			name: 'Product 6',
			description: 'Orange as in...well orange, quite literally.',
			color: 'ORANGE',
		},
		{
			id: 'p7',
			name: 'Product 7',
			description: 'Pink as my pinky',
			color: 'PINK',
		},
		{
			id: 'p8',
			name: 'Product 8',
			description: 'As brown as...you know what.',
			color: 'GREY',
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
			/>
		))
	);
};

export default AvailableProducts;