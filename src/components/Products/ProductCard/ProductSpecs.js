import classes from './ProductCard.module.css';

const ProductSpecs = (props) => {
	return (
        <div>
            <div className={classes.cardTitle}> 
                {props.name}
            </div>
            <div className={classes.price}>
                {`$${props.price.toFixed(2)}`}
            </div>
        </div>

	);
};

export default ProductSpecs;