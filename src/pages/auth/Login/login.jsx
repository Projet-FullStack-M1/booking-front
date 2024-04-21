import { Helmet } from "react-helmet-async";
import styles from "./login.module.scss";
const Login = () => {
  return (
    <div className={styles.login}>
      <Helmet>
        <title>Login</title>
      </Helmet>
    </div>
  );
};

export default Login;
