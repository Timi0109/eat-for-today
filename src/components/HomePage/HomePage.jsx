import React from "react"
import MenuBar from "../MenuBar.jsx";
import styles from "./HomePage.module.css";
import FoodContent from "./FoodContent";
import Title from "../Title.jsx";
import Footer from "../Footer.jsx";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <header className={styles.header}>
                <MenuBar className={styles.menuBar}></MenuBar> 
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