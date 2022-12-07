import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={classes.button}
      style={{ backgroundColor: `${props.color}` }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
