import React, { FormEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BackToHome from "../../components/backToHome/BackToHome";
import ButtonForm from "../../components/buttons/buttonForm/ButtonForm";
import Input from "../../components/input/Input";
import { getUserDataAsyncAction } from "../../reduxTools/reducers/authReducer/actions";
import { userSelector } from "../../reduxTools/selectors.ts/selectors";
// import { GlobalState } from "../../reduxTools/store";
import styles from "./SignInForm.module.scss";

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const auth = useSelector((state: GlobalState) => state.auth);
  const user = useSelector(userSelector)?.username;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: any) => {
    e.preventDefault();

    const email: string = e.currentTarget.email.value;
    const password: string = e.currentTarget.password.value;
    dispatch(getUserDataAsyncAction(email, password));
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <>
      <BackToHome title="Sign in" />
      {/* <div>{JSON.stringify(auth, null, 2)}</div> */}
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputsContainer}>
          <Input
            type="email"
            placeholder="Your email"
            label="Email"
            name={"email"}
          />
          <Input
            type="password"
            placeholder="Your password"
            label="Password"
            name={"password"}
          />
        </div>

        <ButtonForm value="Sign In" />

        <p style={{ margin: "0 auto" }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        <p style={{ margin: "0 auto" }}>
          Forgot password? <Link to="/resetpassword">Reset password</Link>
        </p>
      </form>
    </>
  );
};

export default SignInForm;
