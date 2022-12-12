import classes from "./Description.module.css";

function Description() {
  return (
    <section className={classes.description}>
      <h1 className={classes.header}>Delicious food delivered to you!</h1>
      <p className={classes.text}>
        Choose your favourite meal from our brad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p className={classes.text}>
        All out meals are cooked with high-qality ingredients, just-in-time and
        of course by experienced chefs
      </p>
    </section>
  );
}
export default Description;
