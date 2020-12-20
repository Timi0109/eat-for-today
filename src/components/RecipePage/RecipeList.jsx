import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import RecipeContent from "./RecipeContent.jsx";
import styles from "./RecipeList.module.css";
import MenuBar from "../MenuBar/MenuBar.jsx";
import Title from "../Title.jsx";
import Footer from "../Footer/Footer.jsx";

const RecipeList = () => {
    const [fetchedData, setFetchData] = useState([]);

    useEffect( () => {
        const fetchData = async ()  => {
            const response = await fetch("https://run.mocky.io/v3/52d4c369-4fb5-4b20-bda9-f0ef1c9683db");
            const responseJSON = await response.json();
            setFetchData(responseJSON.recipe);
        };
        if (!fetchedData.length) {
            fetchData();
        }
    },[fetchedData])

    return (
        <div className={styles.recipeListPage}>
            <div className={styles.menu}>
                    <MenuBar className={styles.MenuBar}></MenuBar>
                    <Title></Title>
            </div>
            <div className={styles.titleContainer}>
                <p className={styles.headerTitle}>Recipes</p>
            </div>
            <RecipeContent food={useLocation().state.food} recipes={fetchedData}></RecipeContent>
            <Footer></Footer>
        </div>
    )
}

export default RecipeList;