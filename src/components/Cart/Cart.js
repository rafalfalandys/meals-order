import { Fragment, useContext, useEffect } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import CartSingleItem from "./CartSingleItem";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const closeCartHandler = () => {
    cartCtx.hideCart();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCartHandler();
      }
    });
  }, []);

  return (
    <Fragment>
      <div
        className={`${classes.overlay} ${
          cartCtx.isCartVisible ? "" : classes.hidden
        }`}
        onClick={closeCartHandler}
      ></div>

      <div
        className={`${classes.cart} ${
          cartCtx.isCartVisible ? "" : classes.hidden
        }`}
      >
        <Card>
          <ul>
            <CartSingleItem />
            <CartSingleItem />
          </ul>
          <div className={classes.bottom}>
            <div className={classes["amount-label"]}>Total Amount</div>
            <div className={classes.price}>$120.50</div>
            <div className={classes.buttons}>
              <Button onClick={closeCartHandler}>Close</Button>
              <Button color="var(--primary-color)">Order</Button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
}

export default Cart;
