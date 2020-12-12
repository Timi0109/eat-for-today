import React, { useState,useEffect } from "react";
import RecipeContent from "../RecipePage/RecipeContent.jsx";
import Title from "../Title.jsx";
import MenuBar from "../MenuBar.jsx";
import styles from "./MyAccountPage.module.css";
import Footer from "../Footer.jsx";
import {userHistory, useLocation, useHistory} from "react-router-dom";



const MyAccount = () => {
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://run.mocky.io/v3/3f2f1f43-b019-417b-bb5c-fab2a7d7b86e");
            const responseJSON = await response.json();
            setFetchedData(responseJSON.recipe);
        }
        if(!fetchedData.length){
            fetchData();
        }
    }, [fetchedData]);

    let location = useLocation();
    let history = useHistory();
    return (
        <div className={styles.historyContainer}>
            <header className={styles.header}>
                <MenuBar></MenuBar>
                <Title></Title>
            </header>
            <div className={styles.historyContianer}>
                <div className={styles.historyinnterContainer}>
                    <div className={styles.inline}>
                        <p className={styles.history}>Welcome Back,</p>
                    </div>
                    <div className={styles.inlineTwo}>
                        <p className={styles.historyTwo}>{location.state.name}</p>
                    </div>
                </div>
            </div>
             <RecipeContent food={[]} recipes={fetchedData}></RecipeContent>
            <Footer></Footer>
        </div>
    )
}


export default MyAccount;