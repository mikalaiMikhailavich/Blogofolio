import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentPageAction } from "../../../reduxTools/reducers/paginationReducer/actions";
import { setActiveTabAction } from "../../../reduxTools/reducers/tabReducer/action";
import { ActiveTabType } from "../../../reduxTools/reducers/tabReducer/types";
import { userSelector } from "../../../reduxTools/selectors.ts/selectors";
import styles from "./Tab.module.scss";

export const Tab = (props: {
  name: ActiveTabType;
  activeTab: ActiveTabType;
}) => {
  const { name, activeTab } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const setActiveTab = (tabName: ActiveTabType) => {
    dispatch(setActiveTabAction(tabName));
    dispatch(setCurrentPageAction(0));
  };

  if (!user && name === "My Posts") {
    return null;
  }

  return (
    <>
      <div
        onClick={() => setActiveTab(name)}
        className={
          activeTab === name
            ? `${styles.tab} ${styles.active}`
            : `${styles.tab}`
        }
      >
        {name}
      </div>
    </>
  );
};

// const currentPageSelector = (state: GlobalState) =>
//   state.pagination.currentPage;
// const currentPage = useSelector(currentPageSelector);
