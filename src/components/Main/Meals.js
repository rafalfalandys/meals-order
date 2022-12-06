import classes from "./Meals.module.css";
import Card from "../UI/Card";

function Meals(props) {
  return (
    <section className={classes.meals}>
      <Card>
        <ul></ul>
      </Card>
    </section>
  );
}

export default Meals;
