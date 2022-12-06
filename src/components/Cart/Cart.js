import { Fragment } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import CartSingleItem from "./CartSingleItem";
import Button from "../UI/Button";

const Overlay = <div className={`${classes.overlay} ${classes.hiddenP}`}></div>;

function Cart(props) {
  return (
    <Fragment>
      {Overlay}
      <div className={classes.cart}>
        <Card>
          <ul>
            <CartSingleItem />
            <CartSingleItem />
          </ul>
          <div className={classes.bottom}>
            <div className={classes["amount-label"]}>Total Amount</div>
            <div className={classes.price}>$120.50</div>
            <div className={classes.buttons}>
              <Button>Close</Button>
              <Button color="var(--primary-color)">Order</Button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
}

export default Cart;
