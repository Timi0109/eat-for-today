import React from "react";
import styles from "./RecipePage.module.css";

const Vegetables = ({food, setFood, setveggiesQt}) => {

    return(
        <div className={styles.vegetables}>
            <div className={styles.inputContainer}>
                {/* <div> */}
                    <label className={styles.foodLabel}>Veggies</label>
                    <input className={styles.foodInput} placeholder="Enter veggies name" onChange={e => setFood({...food, "Veggies" :e.target.value})}></input>
                {/* </div> */}
                {/* <div> */}
                    <label className={styles.qtLabel}>Qt</label>
                    <input className={styles.qtInput} placeholder="Enter quantity" onChange={e => setveggiesQt(e.target.value)}></input>
                    <select>
                        <option value="g">g</option>
                        <option value="kg">kg</option>
                        <option value="lbs">lbs</option>
                        <option value="lb">lb</option>
                    </select>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Vegetables;