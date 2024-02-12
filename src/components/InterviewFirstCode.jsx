import React, { useState } from "react";

export const InterviewFirstCode = () => {
  const [list1, setList1] = useState([
    { title: "Item 1", checked: false },
    { title: "Item 2", checked: false },
    { title: "Item 3", checked: false },
  ]);

  const [list2, setList2] = useState([
    { title: "Item A", checked: false },
    { title: "Item B", checked: false },
    { title: "Item C", checked: false },
  ]);

  const handleCheckedboxChange = (idx) => {
    const updatedlist1 = [...list1];
    updatedlist1[idx].checked = !updatedlist1[idx].checked;
    setList1(updatedlist1);
  };

  const handleSwap = () => {
    const updatedlist1 = { ...list1 };
    const updatedlist2 = { ...list2 };
    updatedlist1.forEach((item, idx) => {
      if (item.checked) {
        const temp = updatedlist1[idx].title;
        updatedlist1[idx].title = updatedlist1[idx].title;
        updatedlist2[idx].title = temp;
      }
      updatedlist1[idx].checked = false;
    });
    setList1(updatedlist1);
    setList2(updatedlist2);
  };

  return (
    <div>
      <div>
        <h3>List1</h3>
        <ul>
          {list1.map((item, idx) => (
            <li key={idx}>
              <input
                type="text"
                checked={item.checked}
                onChange={handleCheckedboxChange}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>List 2</h3>
        <ul>
          {list2.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
          <button onChange={handleSwap}>Swap Checked item</button>
        </ul>
      </div>
    </div>
  );
};
