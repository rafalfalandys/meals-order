import classes from "./Description.module.css";
import Card from "../UI/Card";

function Description() {
  return (
    <section className={classes.description}>
      <Card>
        <h1>Delicious food delivered to you!</h1>
        <p>
          Choose your favourite meal from our brad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All out meals are cooked with high-qality ingredients, just-in-time
          and of course by experienced chefs
        </p>
      </Card>
    </section>
  );
}
export default Description;
