import React from "react";

export const PostComponent = ({
  value,
  handlePageChange,
  handleSumit,
  data,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter ID"
        value={value}
        onChange={handlePageChange}
      />
      <button onClick={handleSumit}>Submit</button>
      <div>{data && <div>data?.title</div>}</div>
    </div>
  );
};
