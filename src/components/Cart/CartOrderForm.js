import classes from "./CartOrderForm.module.css";

function CartOrderForm() {
  return (
    <div className={classes.order}>
      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Address</label>
          <input type="text" />
        </div>
        <div>
          <label>Phone</label>
          <input type="number" />
        </div>

        <button>Confirm order</button>
      </form>
    </div>
  );
}

export default CartOrderForm;
