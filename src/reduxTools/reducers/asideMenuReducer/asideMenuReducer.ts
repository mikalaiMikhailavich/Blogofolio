import { CLOSE_MENU, defaultState, TOGGLE_MENU } from "./constants";
import { IAsideMenuAction, IAsideMenuState } from "./types";

export const asideMenuReducer = (
  state: IAsideMenuState = defaultState,
  action: IAsideMenuAction
): IAsideMenuState => {
  switch (action.type) {
    case CLOSE_MENU:
      return {
        ...state,
        isOpen: action.payload,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isOpen: !action.payload,
      };

    default:
      return state;
  }
};
