import styles from "./singlepage.module.scss";
const Singlepage = () => {
  return (
    <div className={styles.singlepage}>
      <div className={styles.details}>
        <div className={styles.wrapper}></div>
      </div>
      <div className={styles.features}>
        <div className={styles.wrapper}></div>
      </div>
    </div>
  );
};

export default Singlepage;
