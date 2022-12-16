import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={classes.button}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
