import React, { useState } from "react";

export const Suffling = () => {
  const [items, setItems] = useState([
    "Apple",
    "Mango",
    "Banana",
    "Grapes",
    "Orange",
  ]);

  const handleShuffle = () => {
    const shuffleItems = [...items];
    for (let i = shuffleItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleItems[i], shuffleItems[j]] = [shuffleItems[j], shuffleItems[i]];
    }
    setItems(shuffleItems);
  };

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
};
