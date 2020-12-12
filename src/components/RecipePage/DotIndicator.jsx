import React from "react";
import styles from "./RecipePage.module.css";


const DotIndicator = ({idx}) => {
    return (
        <div className={styles.dotContainer}>
            <span className={idx === 0 ?styles.dot :styles.dotEmpty}></span>
            <span className={idx === 1 ?styles.dot :styles.dotEmpty}></span>
            <span className={idx === 2 ?styles.dot :styles.dotEmpty}></span>
            <span className={idx === 3 ?styles.dot :styles.dotEmpty}></span>
        </div>
    )
}

export default DotIndicator;