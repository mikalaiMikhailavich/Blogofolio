import React, { createContext, useContext, useState } from "react";

type ThemeColor = "light" | "dark";

interface IThemeContext {
  themeColor: ThemeColor;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColor>>;
}

interface IProps {
  children: JSX.Element;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = (props: IProps) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>("light");

  const contextValue: IThemeContext = {
    themeColor,
    setThemeColor,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
