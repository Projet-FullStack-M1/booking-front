import styles from "./layout.module.scss";
import Header from "../../components/partials/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
