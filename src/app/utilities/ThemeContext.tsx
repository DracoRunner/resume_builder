import React from "react";

export const ThemeContext = React.createContext<any>("light");

// eslint-disable-next-line
export default ({ children }: any) => {
  const [theme, setTheme] = React.useState("retro");

  React.useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const defaultContext = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
};
