import classes from "./MealSingle.module.css";

function MealSingle(props) {
  return (
    <div className={classes.meal}>
      <div className={classes.description}>
        <h2 className={classes.name}>Pizza</h2>
        <p className={classes.text}>Homemade american pizza</p>
        <div className={classes.price}>$16.50</div>
      </div>
      <form>
        <div className={classes.amount}>
          <label>Amount</label>
          <input type="number" min="1" max="5" step="1" value="1" />
        </div>
        <button>+ Add</button>
      </form>
    </div>
  );
}

export default MealSingle;
