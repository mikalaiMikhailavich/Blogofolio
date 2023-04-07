import React from "react";
import styles from "./Popup.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closePopupAction } from "../../reduxTools/reducers/popupReducer/actions";
import { getPopupStateSelector } from "../../reduxTools/selectors.ts/selectors";

const Popup = () => {
  const popupState = useSelector(getPopupStateSelector);
  const dispatch = useDispatch();

  if (!popupState.isOpen) {
    return null;
  }

  const handleClosePopup = () => {
    dispatch(closePopupAction());
  };

  return (
    <div className={styles.wrapper} onClick={handleClosePopup}>
      <div className={styles.content}>
        <img src={popupState.image} alt={popupState.image} />
      </div>
    </div>
  );
};

export default Popup;
