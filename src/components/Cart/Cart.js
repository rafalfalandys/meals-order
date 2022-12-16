import { Fragment, useCallback, useContext, useEffect } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartOrderForm from "./OrderForm";
import CartSummary from "./CartSummary";
import { createPortal } from "react-dom";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const closeCartHandler = useCallback(() => cartCtx.hideCart(), [cartCtx]);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape" && cartCtx.isCartVisible) {
        console.log(e);
        closeCartHandler();
        document.removeEventListener("keydown", escHandler);
      }
    };
    document.addEventListener("keydown", escHandler);
  }, [cartCtx.isCartVisible, closeCartHandler]);

  const overlay = (
    <div
      className={`${classes.overlay} ${
        cartCtx.isCartVisible ? "" : classes.hidden
      }`}
      onClick={closeCartHandler}
    ></div>
  );

  const cartStyles = `${classes.cart} ${
    cartCtx.isCartVisible ? "" : classes.hidden
  }`;

  const portalEl = document.getElementById("overlays");
  const cartEl = (
    <div className={cartStyles}>
      <CartSummary onCloseCart={closeCartHandler} />
      <CartOrderForm />
    </div>
  );

  //////////////////// component /////////////////////

  return (
    <Fragment>
      {createPortal(overlay, portalEl)}
      {createPortal(cartEl, portalEl)}
    </Fragment>
  );
}

export default Cart;
