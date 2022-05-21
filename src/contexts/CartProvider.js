import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => { // working w/ the most recent 'state' (guranteed by useReducer)
    // if we're adding to the cart...
    if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    // need to assign to new, updated var.
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // copy all of previous...
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; // finally, update.
    } else { // not existing, we're adding a new item.
      updatedItems = state.items.concat(action.item); // concat ret. new array (better to be safe when working w/ state snapshots)
    }
    // At last, return new k,v pairings.
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // if we're removing from cart...(possibly when on cart display)
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    // if removing last one, need to remove that 'item' entirely.
    if (existingItem.amount === 1) { // removing last one
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else { // not the last one, there will still be more items of this remaining after removal.
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }; // just change the amount prop.
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; // just update the one we were working w/.
    }
    // return new k,v pairings.
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState; // safety (shudnt reach here...!)
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => { // item b/c when you add said 'item' it is grouped w/ the same types.
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => { // 'id' b/c you can only remove 1 unique obj.
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  // useReducer gurantees us that we're working w/ 'latest' cartState.
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Here, we're passing "cartContext" as the current value.

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
