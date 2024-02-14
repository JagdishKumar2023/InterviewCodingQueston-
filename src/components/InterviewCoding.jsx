import React, { useState } from "react";

const Arr = [
  "Play cricket",
  "play video game",
  "Reading book",
  "Doing Coding",
  "Play BasketBall",
  "Vlogging",
  "Learing Creative",
];

export const InterviewCoding = () => {
  const [check, setCheak] = useState(false);
  const [arrCopy, setArrayCop] = useState(Arr);
  const [currIndex, setCurrIndex] = useState();

  const handleDelete = (itemIndex) => {
    let newArr = arrCopy;
    let filteredArray = newArr.filter((el, i) => {
      return i !== itemIndex;
    });
    setArrayCop(filteredArray);
  };

  const handleCheckBox = (value, i) => {
    setCheak(!check);
    setCurrIndex(i);
  };

  return (
    <div>
      <ul>
        {arrCopy.map((el, i) => {
          return (
            <li>
              <input
                type="checkBox"
                onChange={(e) => handleCheckBox(!e.target.value, i)}
              />
              {el}
              {check && currIndex === i && (
                <button onClick={() => handleDelete(i)}>Deleted</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
