import classes from "./Spinner.module.css";
import { iconSpinner } from "./icons";

function Spinner() {
  return <div className={classes.spinner}>{iconSpinner}</div>;
}

export default Spinner;
