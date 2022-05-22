import { Fragment, useContext, useState } from 'react';
import productLogo from './assets/productLogo.webp'
import { Card, Button } from 'react-bootstrap';
import classes from './ProductCard.module.css';
import CartContext from '../../../contexts/cart-context';
import ProductSpecs from './ProductSpecs.js';
import MoreInfo from '../../Overlays/MoreInfo.js';
import PriceContext from '../../../contexts/price-context';

const ProductCard = (props) => {
	const cartCtx = useContext(CartContext);
	const priceCtx = useContext(PriceContext);
	let colorCSS = null;
	switch (props.color) {
		case "RED":
			colorCSS = classes.redCard
			break;
		case "YELLOW":
			colorCSS = classes.yellowCard
			break;
		case "BLUE":
			colorCSS = classes.blueCard
			break;
		case "GREEN":
			colorCSS = classes.greenCard
			break;
		case "PURPLE":
			colorCSS = classes.purpleCard
			break;
		case "ORANGE":
			colorCSS = classes.orangeCard
			break;
		case "PINK":
			colorCSS = classes.pinkCard
			break;
		case "GREY":
			colorCSS = classes.greyCard
			break;
		default:
			// safety, same as red.
			colorCSS = classes.redCard
	}

	const addToCartHandler = () => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: 1, // for now, default to 1 only.
			price: priceCtx.colorToPrice.get(props.color)
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
			<Card text='white' className={classes.card} id={colorCSS}>
			<Card.Img variant="top" src={productLogo}/>
			<Card.Body>
				<Card.Title> <ProductSpecs name={props.name} color={props.color}/> </Card.Title>
				<Button variant="dark" onClick={showInfoHandler} color={props.color}>More Info</Button>
				<Button variant="success" style={{margin: 4}} onClick={addToCartHandler}>Add To Cart</Button>
			</Card.Body>
			</Card>
		</Fragment>
	);
};

export default ProductCard;