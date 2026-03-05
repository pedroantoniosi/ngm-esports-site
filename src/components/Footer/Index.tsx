import Container from "../Container";
import TemplateAuto from "../TemplateAuto";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container className={`${styles.container}`}>
        <TemplateAuto mode="auto-fit" minWidth="300px" gap="2rem">
          <div>
            <h2 className={`${styles.footerTitle} mb-1`}>NGM eSports</h2>
            <ul className={`${styles.footerList} col gap-05`}>
              <li className={styles.footerLink}>
                Star Strike NGM e-Sport, racing it's our DNA.
              </li>
            </ul>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/ngmracingteam/"
                className={styles.footerLink}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="" className={styles.footerLink}>
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="" className={styles.footerLink}>
                <i className="bi bi-youtube"></i>
              </a>
              <a href="" className={styles.footerLink}>
                <i className="bi bi-twitch"></i>
              </a>
            </div>
          </div>
          <div>
            <h2 className={`${styles.footerTitle} mb-1`}>Galeria</h2>
            <ul className={`${styles.footerList} col gap-05`}>
              <li className={styles.footerLink}>
                <a href="">Fotos</a>
              </li>
              <li className={styles.footerLink}>
                <a href="">Videos</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={`${styles.footerTitle} mb-1`}>Precisa de ajuda?</h2>
            <ul className={`${styles.footerList} col gap-05`}>
              <li className={styles.footerLink}>
                <NavLink to="/" end className={styles.navLink}>
                  Início
                </NavLink>
              </li>
              <li className={styles.footerLink}>
                <NavLink to="/News" className={styles.navLink}>
                  Notícias
                </NavLink>
              </li>
              <li className={styles.footerLink}>
                <NavLink to="/standingsPage" className={styles.navLink}>
                  Classificação
                </NavLink>
              </li>
              <li className={styles.footerLink}>
                <NavLink to="/standingsPage" className={styles.navLink}>
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={`${styles.footerTitle} mb-1`}>Contato</h2>
            <div className={`${styles.footerList} col gap-05`}>
              <a className="row align-center gap-05">
                <i className="bi bi-envelope-fill"></i>
                <span>contact.ngmesport@gmail.com</span>
              </a>
            </div>
          </div>
        </TemplateAuto>
      </Container>
      <p className="text-center py-2">© 2026 NGM e-Sports from YellowDev</p>
    </footer>
  );
};

export default Footer;
