import classes from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>
        &copy; copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
