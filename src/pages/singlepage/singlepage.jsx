import Slider from "../../components/UI/slider/Slider";
import styles from "./singlepage.module.scss";
import { singlePostData, userData } from "../../lib/data";

const Singlepage = () => {
  return (
    <div className={styles.singlepage}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <Slider images={singlePostData.images} />
          <div className={styles.info}>
            <div className={styles.top}>
              <div className={styles.post}>
                <h2>{singlePostData.title}</h2>
                <div className={styles.address}>
                  <img src="/images/pin.png" alt="icon" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className={styles.price}>{singlePostData.price} €</div>
              </div>
              <div className={styles.user}>
                <img src={userData.img} alt="icon" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className={styles.bottom}>{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.wrapper}></div>
      </div>
    </div>
  );
};

export default Singlepage;
