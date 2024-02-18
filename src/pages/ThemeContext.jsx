import { createContext, useContext, useEffect, useState } from "react";

const ThemeContextUse = createContext();

const useTheme = () => {
  return <div>{useContext(ThemeContextUse)}</div>;
};

export const ThemeContext = ({ childer }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("dataTheme", theme);
  });

  return (
    <ThemeContextUse.Provider value={{ theme, toggleTheme, useTheme }}>
      {childer}
    </ThemeContextUse.Provider>
  );
};
