import React from "react";
import { useState } from "react";

export const InterviewQue = () => {
  const [list, setList] = useState([
    "apple",
    "kiwi",
    "Pear",
    "Banana",
    "graps",
    "Mango",
    "Anar",
    "Chiku",
    "Watermelon",
    "papaya",
    "walnut",
  ]);
  const [searchText, setSearchText] = useState("");

  let searchResult = list.filter((item) =>
    item.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="type to search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        {searchResult.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
