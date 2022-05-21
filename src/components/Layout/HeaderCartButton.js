import { useContext, useEffect, useState } from 'react';
import CartIcon from './assets/shopcart.png';
import CartContext from '../../contexts/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx; // extract 'items' prop
  // trick to get the exact # of items so far...
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  // bump animation effect...
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <img className={classes.icon} src={CartIcon} alt="cart image invalid"/>
          Your Cart
      <div className={classes.badge}>{numberOfCartItems}</div>
    </button>
  );
};

export default HeaderCartButton;
