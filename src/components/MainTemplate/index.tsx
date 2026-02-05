import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "../MainTemplate/index.module.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <div className={styles.mainTemplate}>
        <Navbar></Navbar>
        <main className={styles.mainTemplateContent}>{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default MainTemplate;
