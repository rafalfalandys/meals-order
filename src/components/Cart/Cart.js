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

  const cartItems = cartCtx.items.map((meal) => {
    return (
      <CartSingleItem
        name={meal.name}
        price={meal.price.toFixed(2)}
        amount={meal.amount}
        id={meal.id}
        key={meal.id}
      />
    );
  });

  const calcTotalPrice = cartCtx.items
    .reduce((acc, meal) => acc + meal.price * meal.amount, 0)
    .toFixed(2);

  //////////////////// component /////////////////////

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
          <ul>{cartItems}</ul>
          <div className={classes.bottom}>
            <div className={classes["amount-label"]}>Total Price</div>
            <div className={classes.price}>${calcTotalPrice}</div>
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
