import classes from "./Card.module.css";

function Card(props) {
  return (
    <section className={classes.card} style={props.style}>
      {props.children}
    </section>
  );
}

export default Card;
