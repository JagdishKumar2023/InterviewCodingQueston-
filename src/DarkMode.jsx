import React from "react";

export const DarkMode = () => {
  const setDarkMode = () => {
    const setLightMode = () => {
      document.querySelector("body").setAttribute("data-theme", dark);
    };
    return (
      <div>
        <input id="darkMode" type="checkbox" />
      </div>
    );
  };
};
