import React from "react";
import styles from "./RecipePage.module.css";

const OtherFood = ({food, setFood, setOthersQt}) => {
    return (
        <div className={styles.others}>
            <div className={styles.inputContainer}>
                {/* <div> */}
                    <label className={styles.foodLabel}>Others</label>
                    <input className={styles.foodInput} placeholder="Enter name" onChange={e => setFood({...food, "Others" :e.target.value})}></input>
                {/* </div> */}
                {/* <div> */}
                    <label className={styles.qtLabel}>Qt</label>
                    <input className={styles.qtInput} placeholder="Enter quantity" onChange={e => setOthersQt(e.target.value)}></input>
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

export default OtherFood;