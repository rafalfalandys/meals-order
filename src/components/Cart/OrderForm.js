import Card from "../UI/Card";
import classes from "./OrderForm.module.css";
import Button from "../UI/Button";

function CartOrderForm() {
  const orderClasses = `${classes.order} 
  ${classes.moved}`;

  return (
    <div className={classes.hideout}>
      <div className={orderClasses}>
        <Card>
          <form>
            <div className={classes.row}>
              <label>Name</label>
              <input type="text" />
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
              <Button color="var(--primary-color-light)">Order</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default CartOrderForm;
