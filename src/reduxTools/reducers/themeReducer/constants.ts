import { IThemeState } from "./types";

const SET_LIGHT_THEME = "SET_LIGHT_THEME";
const SET_DARK_THEME = "SET_DARK_THEME";
const defaultValue: IThemeState = { themeColor: "light" };

export { SET_LIGHT_THEME, SET_DARK_THEME, defaultValue as defaultState };
