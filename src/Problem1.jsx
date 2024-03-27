import React, { useState } from "react";

function Problem1() {
  const [country, setcountry] = useState(0);
  const [city, setCity] = useState(0);
  const countries = [
    {
      name: "USA",
      value: "US",
      cities: ["New York", "Los Angeles", "Chicago"],
    },
    {
      name: "Japan",
      value: "TK",
      cities: ["Tokyo", "Osaka", "Kyoto"],
    },
    {
      name: "France",
      value: "FR",
      cities: ["Paris", "Marseille", "Lyon"],
    },
  ];
  return (
    <>
      {/* 1st dropdown  */}
      <select onChange={(e) => setcountry(e.target.value)} value={country}>
        {countries.map((item, index) => {
          return (
            <option value={index} key={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      {/* 2nd dropdown  */}
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {countries[country].cities.map((item, index) => {
          return (
            <option value={index} key={item.name}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Problem1;
