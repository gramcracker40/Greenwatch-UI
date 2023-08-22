import React from "react";

import NavigationBar from "./navigationBar.js";
import RoomList from "./roomList.js";
import styles from "./home.module.css";

function HomePage() {
    return (
        <div className={styles['home-page']}>
            <NavigationBar />
            <RoomList />
        </div>
    );
}

export default HomePage; 