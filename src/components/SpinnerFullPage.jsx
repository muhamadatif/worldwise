import Spinner from "./Spinner";
import classes from "./SpinnerFullPage.module.scss";

function SpinnerFullPage() {
  return (
    <div className={classes.spinnerFullpage}>
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;
