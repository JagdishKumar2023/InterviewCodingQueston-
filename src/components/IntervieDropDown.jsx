import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "Pk", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

export const InterviewDropDown = () => {
  // state to store the value of the country
  // {1st DropDown}

  const [country, setCountry] = useState({ name: "", value: "", cities: [] });
  return (
    <div className="InerviewDorpDown">
      <select
        value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => {
          return <option value={index}>{item.name}</option>;
        })}
      </select>

      {/* 2nd DorpDown */}

      <select value={country}>
        {countries[country].cities.map((item, index) => {
          return <option value={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};
