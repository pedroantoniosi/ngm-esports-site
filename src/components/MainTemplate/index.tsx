import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "../MainTemplate/index.module.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <main className={styles.mainTemplate}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </main>
    </>
  );
}

export default MainTemplate;
