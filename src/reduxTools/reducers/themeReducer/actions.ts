import { SET_DARK_THEME, SET_LIGHT_THEME } from "./constants";
import { ITHemeAction } from "./types";

export const setThemeColorLightAction = (): ITHemeAction => {
  return {
    type: SET_LIGHT_THEME,
    themeColor: "light",
  };
};

export const setThemeColorDarkAction = (): ITHemeAction => {
  return {
    type: SET_DARK_THEME,
    themeColor: "dark",
  };
};
