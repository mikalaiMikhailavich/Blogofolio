import { useNavigate } from "react-router-dom";
import BackToHome from "../../components/backToHome/BackToHome";
import ButtonForm from "../../components/buttons/buttonForm/ButtonForm";
import styles from "./Success.module.scss";
const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackToHome title="Success" />
      <div className={styles.formContainer}>
        <p>Email confirmed.</p>
        <p>Your registration is now completed</p>
        <ButtonForm value="Go to home" cb={() => navigate("/")} />
      </div>
    </>
  );
};

export default Success;
