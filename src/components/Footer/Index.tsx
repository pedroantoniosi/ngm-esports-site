import Container from "../Container";
import TemplateAuto from "../TemplateAuto";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container className={`${styles.container}`}>
        <TemplateAuto mode="auto-fit" minWidth="300px" gap="2rem">
          <div>
            <h2 className={`${styles.footerTitle} mb-1`}>Company Name</h2>
            <ul className={`${styles.footerList} col gap-05`}>
              <li className={styles.footerLink}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, iusto. Ea culpa commodi sequi!
              </li>
            </ul>
          </div>
          <div>
            <h2 className={`${styles.footerTitle} mb-1`}>Products</h2>
            <ul className={`${styles.footerList} col gap-05`}>
              <li className={styles.footerLink}>Quadrinhos</li>
            </ul>
          </div>
          <div>
            <h2 className={`${styles.footerTitle} mb-1`}>Useful Links</h2>
            <ul className={`${styles.footerList} col gap-05`}>
              <li className={styles.footerLink}>Home</li>
              <li className={styles.footerLink}>Sobre</li>
            </ul>
          </div>
          <div>
            <h2 className={`${styles.footerTitle} mb-1`}>Contact</h2>
            <div className={`${styles.footerList} col gap-05`}>
              <a className="row gap-05">
                <i className="bi bi-envelope-fill"></i>
                <span>pedroantonio@hotmail.com</span>
              </a>
              <div className="row gap-1">
                <a href="" className={styles.footerLink}>
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="" className={styles.footerLink}>
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="" className={styles.footerLink}>
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="" className={styles.footerLink}>
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </TemplateAuto>
      </Container>
    </footer>
  );
};

export default Footer;
