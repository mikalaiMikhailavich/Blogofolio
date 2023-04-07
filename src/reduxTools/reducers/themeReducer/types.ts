export type ThemeColor = "dark" | "light";

export interface IThemeState {
  themeColor: ThemeColor;
}

export interface ITHemeAction {
  type: "SET_LIGHT_THEME" | "SET_DARK_THEME";
  themeColor: ThemeColor;
}
