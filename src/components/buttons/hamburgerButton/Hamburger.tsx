import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAsideMenuAction } from "../../../reduxTools/reducers/asideMenuReducer/actions";
import { getIsOpenMenuSelector } from "../../../reduxTools/selectors.ts/selectors";
import HamburgerItem from "./hamburger-item/HamburgerItem";
import style from "./Hamburger.module.scss";

const Hamburger = () => {
  const isOpenAsideMenu = useSelector(getIsOpenMenuSelector);
  const dispatch = useDispatch();
  const toggleAsideMenu = (isOpenMenu: boolean) => {
    dispatch(toggleAsideMenuAction(isOpenMenu));
  };
  return (
    <div
      className={style.hamburgerContainer}
      onClick={() => toggleAsideMenu(isOpenAsideMenu)}
    >
      <div className={style.hamburger}>
        <HamburgerItem line="top" />
        <HamburgerItem line="middle" />
        <HamburgerItem line="bottom" />
      </div>
    </div>
  );
};

export default Hamburger;
