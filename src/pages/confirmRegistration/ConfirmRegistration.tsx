import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackToHome from "../../components/backToHome/BackToHome";
import ButtonForm from "../../components/buttons/buttonForm/ButtonForm";
import styles from "./ConfirmRegistration.module.scss";
const ConfirmRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state;
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <BackToHome title="Registration Confirmation" />

      <form className={styles.formContainer}>
        <div className={styles.inputsContainer}>
          <h4 className={styles.text}>
            Please activate your account with the activation link in the email{" "}
            <span className={styles.bold}>{email}</span>.{" "}
            <p>Please, check your email.</p>
          </h4>
        </div>

        <ButtonForm value="Go to home" cb={navigateToHome} />
      </form>
    </>
  );
};

export default ConfirmRegistration;
