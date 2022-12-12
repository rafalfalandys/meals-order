import classes from "./Meals.module.css";
import Card from "../UI/Card";
import MealSingle from "./MealSingle";
import { useEffect, useState } from "react";
import Spinner from "../UI/Spinner";

///////////////// COMPONENT /////////////////

function Meals(props) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-meals-e5a99-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    );
    const data = await response.json();
    const mealsArr = [];
    for (const key in data) mealsArr.push(data[key]);
    setMeals(mealsArr);
    setIsLoading(false);
  };

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
