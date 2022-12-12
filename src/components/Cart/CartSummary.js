import classes from "./CartSummary.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartSingleItem from "./SingleItem";
import Button from "../UI/Button";

function CartSummary(props) {
  const cartCtx = useContext(CartContext);

  const calcTotalPrice = cartCtx.items
    .reduce((acc, meal) => acc + meal.price * meal.amount, 0)
    .toFixed(2);

  const showFormHandler = () => cartCtx.toggleForm();

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

  const isCartEmpty = cartCtx.items.length === 0;

  const orderBtn = isCartEmpty ? (
    ""
  ) : (
    <Button color="var(--primary-color-light)" onClick={showFormHandler}>
      <span>Confirm</span>
    </Button>
  );

  const label = (
    <div className={classes["amount-label"]}>{`${
      isCartEmpty ? "Your cart is empty" : "Total Price"
    }`}</div>
  );

  const price = !isCartEmpty && (
    <div className={classes.price}>${calcTotalPrice}</div>
  );

  return (
    <Card style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}>
      <ul>{cartItems}</ul>
      <div className={classes.bottom}>
        {label}
        {price}
        <div className={classes.buttons}>
          <Button onClick={props.onCloseCart}>
            <span>Close</span>
          </Button>
          {orderBtn}
        </div>
      </div>
    </Card>
  );
}

export default CartSummary;
