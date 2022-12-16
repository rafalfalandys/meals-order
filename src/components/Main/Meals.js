import classes from "./Meals.module.css";
import Card from "../UI/Card";
import MealSingle from "./MealSingle";
import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";
import useAjax from "../../hooks/use-ajax";

///////////////// COMPONENT /////////////////

function Meals() {
  const [meals, setMeals] = useState([]);

  const action = (data) => {
    const mealsArr = [];
    for (const key in data) mealsArr.push(data[key]);
    setMeals(mealsArr);
  };

  const { fetchMeals, isLoading } = useAjax(action);

  useEffect(() => {
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealSingle
      name={meal.name}
      description={meal.description}
      price={meal.price.toFixed(2)}
      id={meal.id}
      key={meal.id}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
          {isLoading && <Spinner />}
        </ul>
      </Card>
    </section>
  );
}

export default Meals;
