import classes from "./Spinner.module.scss";

function Spinner() {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
}

export default Spinner;
