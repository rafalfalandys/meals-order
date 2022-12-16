import { Fragment, useContext } from "react";

import classes from "./Header.module.css";
import Button from "./CartBtn";
import mealImg from "../../img/food.jpg";
import CartContext from "../../store/cart-context";

function Header(props) {
  const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      {/* <div className={`${classes.header}`}> */}
      <div
        className={`${classes.header} ${
          cartCtx.isCartVisible ? "" : classes.sticky
        }`}
      >
        <div className={classes["header-background"]}></div>
        <h2>Meals</h2>
        <Button />
      </div>
      <div className={classes.image}>
        <img src={mealImg} alt="meal" />
      </div>
      <div className={classes.background}></div>
    </Fragment>
  );
}

export default Header;
