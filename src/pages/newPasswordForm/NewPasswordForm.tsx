import React, { FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BackToHome from "../../components/backToHome/BackToHome";
import ButtonForm from "../../components/buttons/buttonForm/ButtonForm";
import Input from "../../components/input/Input";
import { resetPasswordAsyncAction } from "../../reduxTools/reducers/resetPasswordReducer/actions";
import styles from "./NewPasswordForm.module.scss";

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uid, token } = useParams();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: any) => {
    e.preventDefault();
    const password: string = e.currentTarget.password.value;
    if (uid && token) {
      dispatch(
        resetPasswordAsyncAction(uid, token, password, () => navigate("/"))
      );
    } else {
      alert("incorrect path");
    }
  };
  return (
    <>
      <BackToHome title="New password" />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputsContainer}>
          <Input
            type="password"
            placeholder="Your password"
            label="Password"
            name={"password"}
          />
        </div>

        <ButtonForm value="Set password" />
      </form>
    </>
  );
};

export default NewPasswordForm;
