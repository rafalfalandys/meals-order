import React from "react";

export const defaultCartState = {
  isCartVisible: false,

  items: [],
  totalAmount: 0,

  addItem: () => {},
  removeItem: () => {},
  showCart: () => {},
  hideCart: () => {},
};

const CartContext = React.createContext(defaultCartState);

export default CartContext;
