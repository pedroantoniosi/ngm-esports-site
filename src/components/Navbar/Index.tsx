import { NavLink } from "react-router-dom";
import Container from "../Container";
import styles from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbarContainer}`}>
      <Container>
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
      </Container>
    </nav>
  );
};

export default Navbar;
