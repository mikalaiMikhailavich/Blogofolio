import React from "react";
import { useSelector } from "react-redux";
import {
  activeTabSelector,
  tabsSelector,
} from "../../reduxTools/selectors.ts/selectors";
import { Tab } from "./tab/Tab";
import style from "./Tabs.module.scss";

export const Tabs = () => {
  const tabs = useSelector(tabsSelector);
  const activeTab = useSelector(activeTabSelector);

  return (
    <div className={style.tabs}>
      {tabs.map((tab) => (
        <Tab key={tab.id} name={tab.name} activeTab={activeTab}></Tab>
      ))}
    </div>
  );
};
