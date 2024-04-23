import { Helmet } from "react-helmet-async";
import styles from "./register.module.scss";
const Register = () => {
  return (
    <div className={styles.register}>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h1>Ma page Register</h1>
    </div>
  );
};

export default Register;
