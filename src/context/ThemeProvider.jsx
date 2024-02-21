import React, { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ childern }) => {
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleTheme }}>
      {childern}
    </ThemeContext.Provider>
  );
};
