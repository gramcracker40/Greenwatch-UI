import React from "react";
import "../../index.css";

function RoomObj({ name, temperature, humidity, pressure }) {
  
  return (
    <div className="divide-y border-solid border-2 border-gray-300 divide-gray-300 overflow-hidden rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6">
        <h2>{name}</h2>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <p>{temperature}°C</p>
        <p>{humidity}%</p>
        <p>{pressure} hPa</p>
      </div>
    </div>
  );
}

export default RoomObj;
