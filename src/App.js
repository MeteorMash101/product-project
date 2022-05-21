import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Jumbotron from './components/Layout/JumbotronComponent';
import Products from './components/Products/Products.js';
import Cart from './components/Cart/Cart.js'
import CartProvider from './contexts/CartProvider.js';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onClick={showCartHandler}/>
        <Jumbotron/>
        <Products/>
      </CartProvider>
    </Fragment>
  );
}

export default App;