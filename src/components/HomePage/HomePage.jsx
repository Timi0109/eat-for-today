import React from "react"
import MenuBar from "../MenuBar/MenuBar.jsx";
import styles from "./HomePage.module.css";
import FoodContent from "./FoodContent";
import Title from "../Title.jsx";
import Footer from "../Footer/Footer.jsx";
import {userHistory, useLocation, useHistory} from "react-router-dom";

const HomePage = () => {
    let location = useLocation();
    let history = useHistory();
    console.log(location);
    console.log(history);
    return (
        <div className={styles.homePage}>
            <header className={styles.header}>
                <MenuBar></MenuBar> 
                <Title></Title>
            </header>
            <div className={styles.pageTitleContainer}>
                <p className={styles.pagetitle}>Welcome To,</p>
                <p className={styles.pagetitleTwo}>Eat Today</p>
            </div>
            <div className={styles.container}>
                <FoodContent></FoodContent>
            </div>
            <Footer></Footer>
        </div>
        
    )
}


export default HomePage 