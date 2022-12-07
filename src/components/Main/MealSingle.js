import { useRef } from "react";
import Price from "../UI/Price";
import classes from "./MealSingle.module.css";

function MealSingle(props) {
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    console.log(enteredAmount);
  };

  return (
    <li className={classes.meal}>
      <div className={classes.description}>
        <h2 className={classes.name}>{props.name}</h2>
        <p className={classes.text}>{props.description}</p>
        <Price>${props.price}</Price>
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.amount}>
          <label>Amount</label>
          <input
            ref={amountInputRef}
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
          />
        </div>
        <button>+ Add</button>
      </form>
    </li>
  );
}

export default MealSingle;
