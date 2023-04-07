import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>©2022 Blogfolio</div>
        <div>All rights reserved</div>
      </div>
    </div>
  );
};
