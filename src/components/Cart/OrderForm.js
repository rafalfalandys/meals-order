import Card from "../UI/Card";
import classes from "./OrderForm.module.css";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import Spinner from "../UI/Spinner";
import useAjax from "../../hooks/use-ajax";

function CartOrderForm() {
  const cartCtx = useContext(CartContext);
  const [isLoad, setIsLoad] = useState(false);
  const [message, setMessage] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    value: name,
    isValueValid: isNameValueValid,
    isAllValid: isNameValid,
    onChangeHandler: onNameChangeHandler,
    onBlurHandler: onNameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: address,
    isValueValid: isAddressValueValid,
    isAllValid: isAddressValid,
    onChangeHandler: onAddressChangeHandler,
    onBlurHandler: onAddressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== "");

  const {
    value: phone,
    isValueValid: isPhoneValueValid,
    isAllValid: isPhoneValid,
    onChangeHandler: onPhoneChangeHandler,
    onBlurHandler: onPhoneBlurHandler,
    reset: resetPhone,
  } = useInput((value) => value.trim() !== "");

  const action = () => {
    resetName();
    resetAddress();
    resetPhone();
    setIsLoad(true);
  };

  const { fetchMeals: uploadOrder, isLoading } = useAjax(action, true);

  useEffect(() => {
    setIsFormValid(
      isNameValueValid && isAddressValueValid && isPhoneValueValid
    );
  }, [isNameValueValid, isAddressValueValid, isPhoneValueValid]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!isFormValid) return;
    const orderData = {
      name,
      address,
      phone,
      order: cartCtx.items.map((item) => `${item.name} x${item.amount}`),
      totalPrice: cartCtx.totalPrice,
    };

    uploadOrder(orderData).catch((error) => setErrorMsg(error));
  };

  const resetHandler = () => {
    setIsLoad(false);
    cartCtx.hideForm();
    cartCtx.resetCart();
    cartCtx.hideCart();
  };

  useEffect(() => {
    if (cartCtx.items.length === 0) cartCtx.hideForm();
  }, [cartCtx.items]);

  const formEl = (
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
          className={`${classes.phone} ${isPhoneValid ? "" : classes.error}`}
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
        <Button disabled={!isFormValid}>
          <span>Order</span>{" "}
        </Button>
      </div>
    </form>
  );

  useEffect(() => {
    setMessage("Recipe succesfully uploaded");
    setTimeout(() => {
      setMessage("Come back for more some time!");
    }, 1400);
  }, [isLoad]);

  const messageEl = (
    <div className={classes.message}>
      <h1>{message}</h1>
      <Button onClick={resetHandler}>
        <span>New Order</span>{" "}
      </Button>
    </div>
  );

  const orderClasses = `${classes.order} 
  ${cartCtx.isFormVisible || classes.moved}`;

  const errorEl = (
    <div className={classes["error-el"]}>
      <p className={classes.errorMsg}>Something went wrong</p>
      <Button
        style={{ backgroundColor: "var(--primary-color-light)" }}
        onClick={submitHandler}
      >
        Try again
      </Button>
    </div>
  );

  return (
    <div className={classes.hideout}>
      <div className={orderClasses}>
        <Card style={{ height: "40rem" }}>
          {!isLoading && !isLoad && formEl}
          {isLoading && !isLoad && !errorMsg && <Spinner />}
          {!isLoading && isLoad && messageEl}
          {errorMsg && errorEl}
        </Card>
      </div>
    </div>
  );
}

export default CartOrderForm;

// style={{ height: "35rem" }}
