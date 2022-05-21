import React from 'react';

const CartContext = React.createContext({
  // just dummy data (for auto-completion)
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;