import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackToHome.module.scss";
interface IProps {
  title: string;
}

const BackToHome = (props: IProps) => {
  const { title } = props;
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <p>Back to home</p>
      </Link>
      <h2>{title}</h2>
    </div>
  );
};

export default BackToHome;
