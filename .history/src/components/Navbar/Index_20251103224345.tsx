import styles from "./Index.module.css";
import Container from "../Container/Index";
import logo from "../../assets/img/logo.png"; // ✅ importa como módulo

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Container className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Logo da equipe" /> {/* ✅ usa o import */}
        </a>

        <nav className={styles.navMenu}>
          <a href="#news">Notícias</a>
          <a href="#shop">Loja</a>
          <a href="#team">Equipe</a>
          <a href="#contact">Contato</a>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
