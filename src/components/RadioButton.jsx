import React, { useState } from "react";

const options = ["Cricket", "FootBall", "Hockey", "BasketBall", "BaseBall"];
const Days = ["Weekday", "Weekend", "Sunday"];

console.log("play");

export const RadioButton = () => {
  const [game, setGame] = useState();
  const [day, setDays] = useState();

  return (
    <div className="RadioBtn">
      <h1>Which game do you play ?</h1>

      {options.map((currVal) => {
        console.log(currVal);
        return (
          <>
            <input
              type="radio"
              id={currVal}
              name="options"
              value={currVal}
              onChange={(e) => setGame(e.target.value)}
            />
            <label for="curVal">{currVal}</label>
          </>
        );
      })}

      <h1>Select Days</h1>
      {Days.map((currVal1) => {
        console.log(currVal1);
        return (
          <>
            <input
              type="radio"
              id={currVal1}
              name="day"
              value={currVal1}
              onChange={(e) => setDays(e.target.value)}
            />
            <label for="curVal">{currVal1}</label>
          </>
        );
      })}

      <h1>You will play</h1>
      <p>
        {game} on {day}{" "}
      </p>
    </div>
  );
};
