import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartBtn.module.css";
import { CartIcon } from "../UI/icons";

function CartBtn(props) {
  const cartCtx = useContext(CartContext);

  const [bump, setBump] = useState(false);

  useEffect(() => {
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  const clickHandler = () => {
    cartCtx.showCart();
  };
  return (
    <button
      className={`${classes.button} ${bump ? classes.bump : ""}`}
      onClick={clickHandler}
    >
      <div className={classes.icon}> {CartIcon}</div>
      <span className={classes.text}>Cart</span>
      <span className={classes.number}>{cartCtx.totalAmount}</span>
    </button>
  );
}

export default CartBtn;
