import { CLOSE_MENU, TOGGLE_MENU } from "./constants";
import { IAsideMenuAction } from "./types";

const closeAsideMenuAction = (): IAsideMenuAction => {
  return {
    type: CLOSE_MENU,
    payload: false,
  };
};

const toggleAsideMenuAction = (prevState: boolean): IAsideMenuAction => {
  return {
    type: TOGGLE_MENU,
    payload: prevState,
  };
};

export { closeAsideMenuAction, toggleAsideMenuAction };
