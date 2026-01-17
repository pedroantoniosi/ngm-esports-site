import Container from "../Container";
import styles from "./index.module.css";
import Navlinks from "../Navlinks";

const Navbar = () => {
  return (
    <nav className={`${styles.navbarContainer}`}>
      <Container>
        <Navlinks />
      </Container>
    </nav>
  );
};

export default Navbar;
