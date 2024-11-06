import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import css from "./Header.module.css";

export default function Header() {
  function isActiveClass({ isActive }) {
    return isActive ? css.isActive : "";
  }

  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.nav}>
          <div className={css.logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink className={isActiveClass} to="/">
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink className={isActiveClass} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
