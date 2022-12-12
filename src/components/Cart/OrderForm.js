import Card from "../UI/Card";
import classes from "./OrderForm.module.css";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import useInput from "../../hooks/use-input";

function CartOrderForm() {
  const cartCtx = useContext(CartContext);

  const {
    value: name,
    isValueValid: isNameValueValid,
    isAllValid: isNameValid,
    onChangeHandler: onNameChangeHandler,
    onBlurHandler: onNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  console.log(isNameValid, isNameValueValid);

  const orderClasses = `${classes.order} 
  ${cartCtx.isFormVisible || classes.moved}`;

  return (
    <div className={classes.hideout}>
      <div className={orderClasses}>
        <Card>
          <form onSubmit={submitHandler}>
            <div className={classes.row}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={onNameChangeHandler}
                onBlur={onNameBlurHandler}
              />
            </div>
            <div className={classes.row}>
              <label>Address</label>
              <input type="text" />
            </div>
            <div className={classes.row}>
              <label>Phone</label>
              <input type="number" />
            </div>
            <div className={classes.buttons}>
              <Button color="var(--primary-color-light)">
                <span>Order</span>{" "}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default CartOrderForm;
