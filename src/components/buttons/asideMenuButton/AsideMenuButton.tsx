import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutAction } from "../../../reduxTools/reducers/authReducer/actions";
import styles from "./AsideMenuButton.module.scss";

interface IProps {
  value: "Home" | "Add post" | "Sign in" | "Sign out";
  navigationAdress?: string;
}

// const

const AsideMenuButton = (props: IProps) => {
  const dispatch = useDispatch();
  const { value, navigationAdress = "" } = props;
  const navigate = useNavigate();

  const goToAdress = () => {
    navigate(`${navigationAdress}`);
  };

  const logOutAndGoHome = () => {
    dispatch(signOutAction());
    navigate("/");
  };

  const logButton: boolean = value === "Sign in" || value === "Sign out";

  return (
    <input
      className={logButton ? styles.logButton : styles.button}
      type="button"
      value={value}
      onClick={value === "Sign out" ? logOutAndGoHome : goToAdress}
    />
  );
};

export default AsideMenuButton;
