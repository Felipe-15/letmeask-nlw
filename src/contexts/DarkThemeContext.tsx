import { createContext, ReactNode, useState } from "react";

type DarkThemeProps = {
  isDark: boolean;
  setIsDark: Function;
};

export const DarkThemeContext = createContext({} as DarkThemeProps);

const DarkThemeContextProvider = (props: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkThemeContext.Provider value={{ isDark, setIsDark }}>
      {props.children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeContextProvider;
