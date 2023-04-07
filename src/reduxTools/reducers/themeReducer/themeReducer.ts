import { defaultState, SET_DARK_THEME, SET_LIGHT_THEME } from "./constants";
import { ITHemeAction } from "./types";

export const themeReducer = (state = defaultState, action: ITHemeAction) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        ...state,
        themeColor: action.themeColor,
      };
    case SET_DARK_THEME:
      return {
        ...state,
        themeColor: action.themeColor,
      };

    default:
      return state;
  }
};
