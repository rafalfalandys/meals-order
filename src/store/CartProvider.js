import { useState } from "react";
import CartContext from "./cart-context";
import { defaultCartState } from "./cart-context";

function CartProvider(props) {
  const [isCartVisible, setIsCartVisible] = useState(
    defaultCartState.isCartVisible
  );

  const cartContext = {
    isCartVisible: isCartVisible,

    items: [1, 2, 3],
    totalAmount: 0,

    addItem: () => {},
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
