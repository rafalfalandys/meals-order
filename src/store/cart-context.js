import React from "react";

const defaultCartState = {
  isCartVisible: false,
  isOrderFormVisible: false,

  items: [],
  totalAmount: 0,

  addItem: () => {},
  removeItem: () => {},
  showCart: () => {},
  hideCart: () => {},
};

const CartContext = React.createContext(defaultCartState);

export default CartContext;
