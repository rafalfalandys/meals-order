import classes from "./Price.module.css";

function Price(props) {
  return <div className={classes.price}>{props.children}</div>;
}

export default Price;
