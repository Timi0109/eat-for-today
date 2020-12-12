import React from "react";
import styles from "./RecipePage.module.css";

const Sauces = () => {
    return(
        <div className={styles.saucesContainer}>
            <label className={styles.saucesLabel}>
                Soy Sauce
                <input
                className={styles.sauceInput}
                type="checkbox"
                />
            </label>
            <label className={styles.saucesLabel}>
                Sweet Sauce
                <input
                className={styles.sauceInput}
                type="checkbox"
                />
            </label>
            <label className={styles.saucesLabel}>
                Spicy Sauce
                <input
                className={styles.sauceInput}
                type="checkbox"
                />
            </label>
            <label className={styles.saucesLabel}>
                Salad Sauce
                <input
                className={styles.sauceInput}
                type="checkbox"
                />
            </label>
            <label className={styles.saucesLabel}>
                Salt
                <input
                className={styles.sauceInput}
                type="checkbox"
                />
            </label>
            <label className={styles.saucesLabel}>
                Oil
                <input
                className={styles.sauceInput}
                type="checkbox"
                />
            </label>
            <label className={styles.saucesLabel}>
                Butter
                <input
                className={styles.sauceInput}
                type="checkbox"
                />
            </label>
            
        </div>
    )
}

export default Sauces;