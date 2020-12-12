import React from "react";
import styles from "./RecipePage.module.css";

const Meat = ({food, setFood, setFoodQt}) => {
    return (
        <div className={styles.meat}>
                <div className={styles.inputContainer}>
                    {/* <div> */}
                        <label className={styles.foodLabel}>Meat</label>
                        <input className={styles.foodInput} placeholder="Enter meat name" onChange={e => setFood({...food, "Meat": e.target.value})}></input>
                    {/* </div> */}
                    {/* <div> */}
                        <label className={styles.qtLabel}>Qt</label>
                        <input  className={styles.qtInput} placeholder="Enter quantity" onChange={e => setFoodQt(e.target.value)}></input>
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

export default Meat;