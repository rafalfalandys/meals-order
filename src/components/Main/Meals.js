import classes from "./Meals.module.css";
import Card from "../UI/Card";
import MealSingle from "./MealSingle/MealSingle";

function Meals(props) {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          <MealSingle />
          <MealSingle />
        </ul>
      </Card>
    </section>
  );
}

export default Meals;
