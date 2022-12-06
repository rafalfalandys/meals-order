import Button from "../UI/Button";
import Price from "../UI/Price";
import classes from "./CartSingleItem.module.css";

function CartSingleItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.left}>
        <h1 className={classes.name}>Pizza</h1>
        <Price>$16.50</Price>
        <span className={classes.amount}> x1</span>
      </div>
      <div className={classes.right}>
        <Button>-</Button>
        <Button>+</Button>
      </div>
    </li>
  );
}

export default CartSingleItem;
