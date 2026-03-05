import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export default function Navlinks() {
  return (
    <>
      <ul className="row gap-1">
        <li>
          <NavLink to="/" end className={styles.navLink}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/News" className={styles.navLink}>
            Notícias
          </NavLink>
        </li>
        <li>
          <NavLink to="/standingsPage" className={styles.navLink}>
            Classificação
          </NavLink>
        </li>
        <li>
          <NavLink to="/standingsPage" className={styles.navLink}>
            Shop
          </NavLink>
        </li>
      </ul>
    </>
  );
}
