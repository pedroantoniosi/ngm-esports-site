import React from "react";
import styles from "./Index.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="/src/assets/img/logo.png" alt="Logo da equipe" />
        </a>

        <nav className={styles.navMenu}>
          <a href="#news">Notícias</a>
          <a href="#shop">Loja</a>
          <a href="#team">Equipe</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
