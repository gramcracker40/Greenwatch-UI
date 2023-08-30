import React from "react";
import RoomObj from "./roomObj";
import "../../index.css";

const roomsData = [
  {
    name: "Room A",
    temperature: 25,
    humidity: 60,
    pressure: 1012,
  },
  {
    name: "Room B",
    temperature: 22,
    humidity: 70,
    pressure: 1010,
  },
  {
    name: "Room C",
    temperature: 29,
    humidity: 60,
    pressure: 1012,
  },
  {
    name: "Room D",
    temperature: 27,
    humidity: 70,
    pressure: 1010,
  },
];

function RoomList() {
  return (
    <ul className=" space-y-5 w-3/5 ">
      {roomsData.map((room) => (
        <li
          key={room.name}
          className="overflow-hidden bg-grey-900 px-6 py-4 shadow"
        >
          <RoomObj
            key={room.name}
            name={room.name}
            temperature={room.temperature}
            humidity={room.humidity}
            pressure={room.pressure}
          />
        </li>
      ))}
    </ul>
  );
}

export default RoomList;
