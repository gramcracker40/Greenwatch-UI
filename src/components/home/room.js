import React from 'react';
import styles from "./home.module.css";

function Room({ name, temperature, humidity, pressure }) {
    function handleClick(obj) {
        console.log(obj);
    }
  
    return (
    <div className={styles.room} onClick={handleClick}>
      <h2>{name}</h2>
      <p>{temperature}°C</p>
      <p>{humidity}%</p>
      <p>{pressure} hPa</p>
    </div>
  );
}

export default Room;