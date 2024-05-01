import styles from "./chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        <h2>Messages</h2>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className={styles.message}>
          <img src="/images/Malick.jpg" alt="user" />
          <span>Malick</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div className={styles.chatBox}>Box</div>
    </div>
  );
};

export default Chat;
