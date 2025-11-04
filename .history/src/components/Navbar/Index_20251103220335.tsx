import React from "react";
import styles from "./Index.module.css";
import Container from "../Container/Index";
const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Container className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="../assets/img/banner.png" alt="Logo da equipe" />
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
