import React, { useState } from "react";

const options = ["Cricket", "FootBall", "Hocky"];
const days = ["Weekend", "Weekday", "Sunday"];

export const InterviewRound = () => {
  const [game, setGame] = useState();
  const [day, setDays] = useState();

  return (
    <div className="RadioBtn">
      <h1>Which game do you play ?</h1>
      {options.map((playGame) => {
        console.log(playGame);
        return (
          <>
            <input
              type="radio"
              id={playGame}
              name="options"
              value={playGame}
              onChange={(e) => setGame(e.target.value)}
            />
            <label for="ele">{playGame}</label>
          </>
        );
      })}

      <h1>Select Days</h1>
      {days.map((ForDays) => {
        console.log(ForDays);
        return (
          <>
            <input
              type="radio"
              id={ForDays}
              name="day"
              value={ForDays}
              onChange={(e) => setDays(e.target.value)}
            />
            <label for="ele1">{ForDays}</label>
          </>
        );
      })}

      <h1>You will play</h1>
      <p>
        {game} on {day} {""}
      </p>
    </div>
  );
};
