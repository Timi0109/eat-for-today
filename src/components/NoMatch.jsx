import React from "react";
import {useHistory} from "react-router-dom";
import styles from "./NoMatch.module.css";

const NoMatch = () => {
    let history = useHistory();

    const handleClick = () =>{
        history.push("/");    
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.interContianer}>
                <p className={styles.title}>OH NO!</p>
                <p className={styles.title}>YOU ARE LOST!</p>
                <p className={styles.content}>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
                <button className={styles.home} onClick={() => handleClick()}>Home</button>
            </div>
        </div>
    )
}

export default NoMatch;