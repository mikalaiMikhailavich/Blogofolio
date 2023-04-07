import { useDispatch, useSelector } from "react-redux";
import { closeAsideMenuAction } from "../../reduxTools/reducers/asideMenuReducer/actions";
import {
  getIsOpenMenuSelector,
  userSelector,
} from "../../reduxTools/selectors.ts/selectors";

import { AccountInfo } from "../accountInfo/AccountInfo";
import AsideMenuButton from "../buttons/asideMenuButton/AsideMenuButton";
import DarkThemeButton from "../buttons/darkThemeButton/DarkThemeButton";
import LightThemeButton from "../buttons/lightThemeButton/LightThemeButton";
import styles from "./AsideMenu.module.scss";

const AsideMenu = () => {
  const isOpenAsideMenu = useSelector(getIsOpenMenuSelector);
  const user = useSelector(userSelector)?.username;

  const dispatch = useDispatch();

  const closeAsideMenu = () => {
    dispatch(closeAsideMenuAction());
  };

  return (
    <div
      className={
        isOpenAsideMenu ? `${styles.wrapper} ${styles.active}` : styles.wrapper
      }
      onClick={closeAsideMenu}
    >
      <div className={styles.blur} />
      <div
        className={
          isOpenAsideMenu
            ? `${styles.container} ${styles.active}`
            : styles.container
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {!user ? null : <AccountInfo name={user} />}

          <AsideMenuButton value="Home" />

          <AsideMenuButton value="Add post" navigationAdress="createpost" />
        </div>
        <div>
          <div className={styles.themeButtonsContainer}>
            <LightThemeButton />
            <DarkThemeButton />
          </div>
          {user ? (
            <AsideMenuButton value="Sign out" navigationAdress="" />
          ) : (
            <AsideMenuButton value="Sign in" navigationAdress="signin" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
