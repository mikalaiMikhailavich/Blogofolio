import React from "react";
import styles from "./Input.module.scss";

interface IProps {
  type: string;
  placeholder: string;
  label: string;
  name?: string;
}

const Input = (props: IProps) => {
  const { type, placeholder, label, name } = props;

  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <input
        name={name}
        className={styles.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
