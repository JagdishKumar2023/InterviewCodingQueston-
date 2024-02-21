import React from "react";
import { useState } from "react";

export const DarkMode = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle ? "dark-mode" : "app"}>
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Chanllenge</h1>
        </div>
        <button
          className="app__dark-mode-btn icon level"
          onClick={() => setToggle(!toggle)}
        >
          DarkMode
        </button>
      </div>

      <div className="columns">
        <div className="colunm">
          <h2>
            This button is used for the color change the website background in
            the white and black background for the button click.
          </h2>
        </div>
      </div>
    </div>
  );
};
