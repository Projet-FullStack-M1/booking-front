import Chat from "../../../components/UI/chat/Chat";
import List from "../../../components/UI/list/List";
import styles from "./profile.module.scss";

const profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h2>User Information</h2>
            <button>Modifier</button>
          </div>
          <div className={styles.info}>
            <span>
              Avatar : <img src="/images/Malick.jpg" alt="user" />
            </span>
            <span>
              Username : <b>Malick</b>
            </span>
            <span>
              Email : <b>ndiaye2@gmail.com</b>
            </span>
          </div>
          <div className={styles.title}>
            <h2>Mes Appartements</h2>
            <button>Ajouter</button>
          </div>
          <List />
          <div className={styles.title}>
            <h2>Sauvegardés</h2>
          </div>
          <List />
        </div>
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.wrapper}>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default profile;
