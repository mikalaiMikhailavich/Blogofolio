import React from "react";
import Search from "./search/Search";
import styles from "./Header.module.scss";
import Hamburger from "../buttons/hamburgerButton/Hamburger";
import { AccountInfo } from "../accountInfo/AccountInfo";
import NotRegisteredUserButton from "../buttons/notRegisteredUserButton/NotRegisteredUserButton";
import AsideMenu from "../asideMenu/AsideMenu";
import { useSelector } from "react-redux";
import { userSelector } from "../../reduxTools/selectors.ts/selectors";

const Header = () => {
  const user = useSelector(userSelector)?.username;

  return (
    <header className={styles.header}>
      <AsideMenu />
      <Hamburger />
      <Search />
      {user ? <AccountInfo name={user} /> : <NotRegisteredUserButton />}
    </header>
  );
};

export default Header;
