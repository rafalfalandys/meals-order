import React from "react";

const defaultCartState = {
  isCartVisible: false,
  isFormVisible: false,

  items: [],
  totalAmount: 0,

  addItem: () => {},
  removeItem: () => {},

  showCart: () => {},
  hideCart: () => {},

  showForm: () => {},
  hideForm: () => {},
  toggleForm: () => {},
};

const CartContext = React.createContext(defaultCartState);

export default CartContext;
