import { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.amount;

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
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }

    if (!state.items.some((item) => item.id === action.item.id)) {
      return {
        items: [...state.items, action.item],
        totalAmount: updatedTotalAmount,
      };
    }
  }
  return defaultCartState;
};

/////////////////// component /////////////////////

function CartProvider(props) {
  const [isCartVisible, setIsCartVisible] = useState(false);

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
  const removeItem = (id) => setCartState({ type: "REMOVE", id: id });

  const cartContext = {
    isCartVisible: isCartVisible,

    items: cartState.items,
    totalAmount: cartState.totalAmount,

    addItem: addItem,
    removeItem: () => {},
    showCart: () => {
      setIsCartVisible(true);
    },
    hideCart: () => setIsCartVisible(false),
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
