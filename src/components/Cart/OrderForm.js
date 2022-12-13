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

  const {
    value: address,
    isValueValid: isAddressValueValid,
    isAllValid: isAddressValid,
    onChangeHandler: onAddressChangeHandler,
    onBlurHandler: onAddressBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: phone,
    isValueValid: isPhoneValueValid,
    isAllValid: isPhoneValid,
    onChangeHandler: onPhoneChangeHandler,
    onBlurHandler: onPhoneBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

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
                className={`${isNameValid ? "" : classes.error}`}
                type="text"
                value={name}
                onChange={onNameChangeHandler}
                onBlur={onNameBlurHandler}
              />
            </div>
            <p className={classes["error-msg"]}>
              {isNameValid || <span>Enter correct name</span>}
            </p>
            <div className={classes.row}>
              <label>Address</label>
              <input
                className={`${isAddressValid ? "" : classes.error}`}
                type="text"
                value={address}
                onChange={onAddressChangeHandler}
                onBlur={onAddressBlurHandler}
              />
            </div>

            <p className={classes["error-msg"]}>
              {isAddressValid || <span>Enter correct address</span>}
            </p>
            <div className={classes.row}>
              <label>Phone</label>
              <input
                className={`${isPhoneValid ? "" : classes.error}`}
                type="number"
                value={phone}
                onChange={onPhoneChangeHandler}
                onBlur={onPhoneBlurHandler}
              />
            </div>
            <p className={classes["error-msg"]}>
              {isPhoneValid || <span>Enter correct phone</span>}
            </p>
            <div className={classes.buttons}>
              <Button style={{ backgroundColor: "var(--primary-color-light)" }}>
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
