import React, {useState, useEffect} from "react";
import styles from "./RecipePage.module.css";
import MenuBar from "../MenuBar.jsx";
import Title from "../Title.jsx";
import Form from "./Form.jsx";
import Footer from "../Footer.jsx";

const RecipePage = () => {
    return (
        <div className={styles.recipePage}>
            <div className={styles.menu}>
                <MenuBar className={styles.MenuBar}></MenuBar>
                <Title></Title>
            </div>
            <Form></Form>
            <Footer></Footer>
        </div>
    )
}


export default RecipePage;