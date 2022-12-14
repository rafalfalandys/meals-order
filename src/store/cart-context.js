import React from "react";

const defaultCartState = {
  isCartVisible: false,
  isFormVisible: false,

  items: [],
  totalAmount: 0,
  totalPrice: 0,

  addItem: () => {},
  removeItem: () => {},
  calcTotalPrice: () => {},

  showCart: () => {},
  hideCart: () => {},

  showForm: () => {},
  hideForm: () => {},
  toggleForm: () => {},
};

const CartContext = React.createContext(defaultCartState);

export default CartContext;
