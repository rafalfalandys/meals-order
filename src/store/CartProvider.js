import { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.amount;
    const updatedTotalPrice = (
      state.totalPrice +
      action.item.price * action.item.amount
    ).toFixed(2);

    if (state.items.some((item) => item.id === action.item.id)) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const curItem = state.items[itemIndex];
      const updatedItem = {
        ...curItem,
        amount: curItem.amount + action.item.amount,
      };
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalPrice: +updatedTotalPrice,
      };
    }

    if (!state.items.some((item) => item.id === action.item.id)) {
      return {
        items: [...state.items, action.item],
        totalAmount: updatedTotalAmount,
        totalPrice: +updatedTotalPrice,
      };
    }
  }

  if (action.type === "REMOVE") {
    const updatedTotalAmount = state.totalAmount - 1;
    const updatedTotalPrice = (state.totalPrice - action.price).toFixed(2);
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const updatedItems = [...state.items];

    if (state.items[itemIndex].amount === 1) {
      updatedItems.splice(itemIndex, 1);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalPrice: +updatedTotalPrice,
      };
    }
    if (state.items[itemIndex].amount > 1) {
      const curItem = state.items[itemIndex];
      const updatedItem = { ...curItem, amount: curItem.amount - 1 };
      updatedItems.splice(itemIndex, 1, updatedItem);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalPrice: +updatedTotalPrice,
      };
    }
  }

  return defaultCartState;
};

/////////////////// component /////////////////////

function CartProvider(props) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [cartState, setCartState] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    setCartState({
      type: "ADD",
      item: {
        name: item.name,
        price: item.price,
        amount: item.amount,
        id: item.id,
      },
    });
  };

  const removeItem = (item) =>
    setCartState({ type: "REMOVE", id: item.id, price: item.price });

  const resetCart = () => setCartState({});

  const cartContext = {
    isCartVisible: isCartVisible,
    isFormVisible: isFormVisible,

    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,

    addItem: addItem,
    removeItem: removeItem,
    resetCart: resetCart,

    showCart: () => setIsCartVisible(true),
    hideCart: () => setIsCartVisible(false),

    showForm: () => setIsFormVisible(true),
    hideForm: () => setIsFormVisible(false),
    toggleForm: () => setIsFormVisible((prevState) => !prevState),
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
