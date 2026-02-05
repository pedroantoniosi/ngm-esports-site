import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export default function Navlinks() {
  return (
    <>
      <ul className="row gap-1">
        <li>
          <NavLink to="/" end className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/News" className={styles.navLink}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/standingsPage" className={styles.navLink}>
            Standings
          </NavLink>
        </li>
        <li>
          <NavLink to="/standingsPage" className={styles.navLink}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.navLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
}
