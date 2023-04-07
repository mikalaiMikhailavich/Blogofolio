import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import BackToHome from "../../components/backToHome/BackToHome";
import ButtonForm from "../../components/buttons/buttonForm/ButtonForm";
import Input from "../../components/input/Input";
import { fetchResetPassword } from "../../services/resetPassword/resetPassword";
import styles from "./ResetPasswordForm.module.scss";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: any) => {
    e.preventDefault();

    const email: string = e.currentTarget.email.value;
    fetchResetPassword(email);
    navigate("/");
  };
  return (
    <>
      <BackToHome title="Reset password" />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <p>You will receive an email with a link to reset your password!</p>
        <div className={styles.inputsContainer}>
          <Input
            type="email"
            placeholder="Your email"
            label="Email"
            name={"email"}
          />
        </div>

        <ButtonForm value="Reset" />
      </form>
    </>
  );
};

export default ResetPasswordForm;
