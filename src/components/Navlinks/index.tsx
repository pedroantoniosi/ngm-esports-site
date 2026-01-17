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
          <NavLink to="/standings" className={styles.navLink}>
            Standings
          </NavLink>
        </li>
      </ul>
    </>
  );
}
