import { IAsideMenuState } from "./types";

const OPEN_MENU = "OPEN_MENU";
const CLOSE_MENU = "CLOSE_MENU";
const TOGGLE_MENU = "TOOGLE_MENU";

const defaultState: IAsideMenuState = {
  isOpen: false,
};

export { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU, defaultState };
