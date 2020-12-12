import React,{useEffect, useState} from "react";
import styles from "./FoodContent.module.css";
import { ArrowRight } from 'react-bootstrap-icons';

const FoodContent = () => {
    const [content, setContent] = useState([])
    const [fetchedData, setFetchedData] = useState([]);
    
    useEffect( () => {
        const fetchData  = async() => {
            const response = await fetch("https://run.mocky.io/v3/e2608e4d-c9e8-4cd6-8ccd-21a0aeedb3d5");
            const responseJson = await response.json();
            setFetchedData(responseJson.food);
        };
        if (!fetchedData.length) {
            fetchData();
        }
    },[fetchedData]);

    const pickFood = () => {
      const num = Math.floor(Math.random() * fetchedData.length);
      setContent(fetchedData[num]);
    }

    return (
        <div className={styles.foodContainer}>
            <div className={styles.randContainer}>
                <button className={styles.pickFoodBtn} onClick={() => pickFood()}>Pick Food</button>
                <p className={styles.tips}>No idea what eat today? Let's pick randomly!</p>
            </div>
                <ArrowRight className={styles.arrowIcon} size={96} />
            <div className={styles.choosedFoodContainer}>
               {content.name ?<p className={styles.foodName}>{content.name}</p> :null}
               {content.name ?<img className={styles.pickedFood} src={content.url} alt="picked-img"></img> 
                            //  :null
                             :<img className={styles.pickedFoodGif} src="https://i.pinimg.com/originals/f0/ca/90/f0ca90dd6924e009d86f4421cf2032b5.gif" alt="header png"></img>
                             }
            </div>
        </div>
    )
}


export default FoodContent