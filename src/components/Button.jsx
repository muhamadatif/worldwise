import classes from "./Button.module.scss";
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${classes.btn} ${classes[type]}`}>
      {children}
    </button>
  );
}

export default Button;
