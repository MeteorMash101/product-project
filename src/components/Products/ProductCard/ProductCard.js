import { Fragment, useContext, useState } from 'react';
import productLogo from './assets/productLogo.webp'
import { Card, Button } from 'react-bootstrap';
import classes from './ProductCard.module.css';
import CartContext from '../../../contexts/cart-context';
import ProductSpecs from './ProductSpecs.js';
import MoreInfo from '../../Overlays/MoreInfo.js';

const ProductCard = (props) => {
	const cartCtx = useContext(CartContext);
	let colorClass = null;
	if (props.color === "Red") {
		colorClass = classes.redCard
	}
	else if (props.color === "Yellow") {
		colorClass = classes.yellowCard
	}
	else if (props.color === "Blue") {
		colorClass = classes.blueCard
	}
	else if (props.color === "Green") {
		colorClass = classes.greenCard
	}

	const addToCartHandler = () => {
		cartCtx.addItem({
		  id: props.id,
		  name: props.name,
		  amount: 1, // for now, default to 1 only.
		  price: props.price
		});
	};

    // for displaying "More Info" overlay, or not...
    const [infoIsShown, setInfoIsShown] = useState(false);
    const showInfoHandler = () => {
        setInfoIsShown(true);
    };
    const hideInfoHandler = () => {
        setInfoIsShown(false);
    };
	
	return (
		<Fragment>
			{infoIsShown && <MoreInfo onClose={hideInfoHandler}/>}
			<Card text='white' className={colorClass}>
			<Card.Img variant="top" src={productLogo} />
			<Card.Body>
				<Card.Title> <ProductSpecs name={props.name} price={props.price}/> </Card.Title>
				<Button variant="dark" onClick={showInfoHandler} color={props.color}>More Info</Button>
				<Button variant="success" style={{margin: 4}} onClick={addToCartHandler}> Add To Cart</Button>
			</Card.Body>
			</Card>
		</Fragment>
	);
};

export default ProductCard;