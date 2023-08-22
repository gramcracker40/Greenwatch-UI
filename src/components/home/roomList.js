import React from 'react';
import Room from './room';
import styles from "./home.module.css";

const roomsData = [
  {
    name: 'Room A',
    temperature: 25,
    humidity: 60,
    pressure: 1012,
  },
  {
    name: 'Room B',
    temperature: 22,
    humidity: 70,
    pressure: 1010,
  },
  {
    name: 'Room C',
    temperature: 29,
    humidity: 60,
    pressure: 1012,
  },
  {
    name: 'Room D',
    temperature: 27,
    humidity: 70,
    pressure: 1010,
  }
];

function RoomList() {
  return (
    <div className={styles["room-list"]}>
      {roomsData.map(room => (
        <Room
          key={room.name}
          name={room.name}
          temperature={room.temperature}
          humidity={room.humidity}
          pressure={room.pressure}
        />
      ))}
    </div>
  );
}

export default RoomList;