import React from "react";
import styles from "./ButtonForm.module.scss";

interface IProps {
  value: string;
  cb?: () => void;
}

const ButtonForm = (props: IProps) => {
  const { value, cb = () => {} } = props;
  return (
    <input className={styles.button} type="submit" value={value} onClick={cb} />
  );
};

export default ButtonForm;
