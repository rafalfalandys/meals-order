import { Fragment } from "react";

import classes from "./Header.module.css";
import Button from "./CartBtn";
import mealImg from "../../img/food.jpg";

function Header(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes["header-background"]}></div>
        <h2>Meals</h2>
        <Button />
      </div>
      <div className={classes.image}>
        <img src={mealImg} />
      </div>
      <div className={classes.background}></div>
    </Fragment>
  );
}

export default Header;
