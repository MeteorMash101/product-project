import classes from './ProductCard.module.css';
import { useContext } from 'react';
import PriceContext from '../../../contexts/price-context';

const ProductSpecs = (props) => {
    const priceCtx = useContext(PriceContext);

	return (
        <div>
            <div className={classes.cardTitle}>
                {props.name}
            </div>
            <div className={classes.price}>
                {`$${priceCtx.colorToPrice.get(props.color).toFixed(2)}`}
            </div>
        </div>

	);
};

export default ProductSpecs;