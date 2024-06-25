import { NavLink } from "react-router-dom";
import classes from "./PageNav.module.scss";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={classes.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={classes.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
