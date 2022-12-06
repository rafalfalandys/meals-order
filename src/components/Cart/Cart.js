import { Fragment } from "react";
import classes from "./Cart.module.css";

const Overlay = <div className={`${classes.overlay} ${classes.hidden}`}></div>;

function Cart(props) {
  return (
    <Fragment>
      {Overlay}
      <div className={classes.cart}></div>
    </Fragment>
  );
}

export default Cart;
