import React from 'react';
import styles from "./home.module.css";



function NavigationComponent({ text, handleClick }) {
    return (
        <li className={styles["nav-item"]}>
            <span onClick={handleClick}>{text}</span>
        </li>
    );
}




function NavigationBar() {

    function handleClick() {
        console.log("Nav component clicked!");
    }

    

    return (
        <nav className={styles["navigation-bar"]}>
            <ul className={styles["nav-list"]}>
                <NavigationComponent text="Logout" handleClick={handleClick}/>
                <NavigationComponent text="Users" handleClick={handleClick}/>
                <NavigationComponent text="Rooms" handleClick={handleClick}/>
                <NavigationComponent text="Experiments" handleClick={handleClick}/>
            </ul>
        </nav>
    );
}

export default NavigationBar;