import React, { FormEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackToHome from "../../components/backToHome/BackToHome";
import ButtonForm from "../../components/buttons/buttonForm/ButtonForm";
import Input from "../../components/input/Input";
import styles from "./SignUpForm.module.scss";
import { useDispatch } from "react-redux";
import { registerUserAsyncAction } from "../../reduxTools/reducers/registerReducer/actions";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const name: string = e.currentTarget.userName.value;
    const email: string = e.currentTarget.userEmail.value;
    const password: string = e.currentTarget.userPassword.value;
    // const confirmPassword: string = e.currentTarget.confirmUserPassword.value;

    dispatch(
      registerUserAsyncAction(name, email, password, () =>
        navigate("/registrationconfirmation", { state: email })
      )
    );
  };

  return (
    <>
      <BackToHome title="Sign Up" />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputsContainer}>
          <Input
            type="text"
            placeholder="Your name"
            label="Name"
            name={"userName"}
          />
          <Input
            type="email"
            placeholder="Your email"
            label="Email"
            name={"userEmail"}
          />
          <Input
            type="password"
            placeholder="Your password"
            label="Password"
            name={"userPassword"}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            label="Confirm password"
            name={"confirmUserPassword"}
          />
          <ButtonForm value="Sign Up" />
        </div>

        <p className={styles.redirect}>
          Don't have an account?{" "}
          <Link to="/signin" className={styles.link}>
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
