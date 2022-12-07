import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Price from "../UI/Price";
import classes from "./CartSingleItem.module.css";

function CartSingleItem(props) {
  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.addItem({
      name: props.name,
      amount: 1,
      price: props.price,
      id: props.id,
    });
  };

  const removeItemHandler = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <li className={classes.item}>
      <div className={classes.left}>
        <h1 className={classes.name}>{props.name}</h1>
        <Price>${props.price}</Price>
        <span className={classes.amount}>x{props.amount}</span>
      </div>
      <div className={classes.right}>
        <Button onClick={removeItemHandler}>-</Button>
        <Button onClick={addItemHandler}>+</Button>
      </div>
    </li>
  );
}

export default CartSingleItem;
