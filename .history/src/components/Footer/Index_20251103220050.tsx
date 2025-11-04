import React from "react";
import styles from "./Index.module.css";
import Container from "../Container/Index";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.col}>
          <h3>Star Strike Racing</h3>
          <p>Automobilismo virtual, paixão real.</p>
        </div>

        <div className={styles.col}>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#news">Notícias</a>
            </li>
            <li>
              <a href="#shop">Loja</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Redes</h4>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">
              📷
            </a>
            <a href="#" aria-label="Twitter">
              🐦
            </a>
            <a href="#" aria-label="YouTube">
              ▶️
            </a>
          </div>
        </div>
      </Container>
      <div className={styles.copy}>
        <p>
          © {new Date().getFullYear()} Star Strike Racing. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
