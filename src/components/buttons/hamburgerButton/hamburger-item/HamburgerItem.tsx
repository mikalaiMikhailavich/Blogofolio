import React from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../../reduxTools/store";
import styles from "./HamburgerItem.module.scss";
const getIsOpenMenuSelector = (state: GlobalState) => state.asideMenu.isOpen;

interface IType {
  line: "top" | "middle" | "bottom";
}

const HamburgerItem = (props: IType) => {
  const isOpenAsideMenu = useSelector(getIsOpenMenuSelector);
  const { line } = props;
  return (
    <div
      className={
        !isOpenAsideMenu
          ? styles.hamburgerItem
          : `${styles.hamburgerItem} ${styles[`clicked-${line}`]}`
      }
    ></div>
  );
};

export default HamburgerItem;
