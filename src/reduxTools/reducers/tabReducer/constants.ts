import { IDefaultState } from "./types";

const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

const defaultState: IDefaultState = {
  tabs: [
    { id: 1, name: "All" },
    { id: 2, name: "My favorites" },
    { id: 3, name: "Popular" },
    { id: 4, name: "My Posts" },
  ],
  activeTab: "All",
};

export { defaultState, SET_ACTIVE_TAB };
