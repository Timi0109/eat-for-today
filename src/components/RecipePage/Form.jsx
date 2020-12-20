import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import styles from "./RecipePage.module.css";
import DotIndicator from "./DotIndicator.jsx";
import NavIcon from "./NavIcon";
import Meat from "./Meat";
import Vegetables from "./Vegetables";
import OtherFood from "./OtherFood";
import Sauces from "./Sauces";

const Form = () => {
    const [food, setFood] = useState({});
    const [allergy, setAllergy] = useState(null);
    const [foodQt, setFoodQt] = useState(0);
    const [veggiesQt, setveggiesQt] = useState(0);
    const [othersQt, setOthersQt] = useState(0);
    const [idx, setIdx] = useState(0);
    const [allergyQt,setAllergyQt] = useState(0);

    let history = useHistory();

    const handleAllergyChange = (e) => {
        setAllergy(e.target.value);
    }

    const handleSubmit = (e) =>{ 
        if(isNaN(foodQt) || foodQt < 0){
            setFoodQt(0);
            alert("Food quantity must be a positive number!")
            return;
        }
        if(isNaN(veggiesQt) || veggiesQt < 0){
            setveggiesQt(0);
            alert("Veggies quantity must be a positive number!")
            return;
        }
        if(isNaN(othersQt) || othersQt < 0){
            console.log(othersQt);
            setOthersQt(0);
            alert("Others quantity must be a positive number!")
            return;
        }
        e.preventDefault();
        history.push("/recipe-list", {food});
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                    <h1>Submit what you got</h1>
                    <h1>We find recipe for you!</h1>
            </div>

            <NavIcon food={food} setIdx={setIdx}></NavIcon>
            <DotIndicator idx={idx}></DotIndicator>

            <div className={styles.kichenImg}></div>
                <form className={styles.formContainer} onSubmit={e => handleSubmit(e)}>
                    <div className={styles.innerformContainer}>
                        {/* <div className={styles.gridForm}> */}
                            <Meat food={food} setFood={setFood} setFoodQt={setFoodQt}></Meat>
                            <Vegetables food={food} setFood={setFood} setveggiesQt={setveggiesQt}></Vegetables>
                            <OtherFood food={food} setFood={setFood} setOthersQt={setOthersQt}></OtherFood>

                            <div className={styles.allergy}>
                                <div className={styles.inputContainer}> 
                                    <label className={styles.foodLabel}>Allergy</label>
                                    <input className={styles.foodInput} placeholder="Enter name" onChange={e => setAllergy(e.target.value)}></input>
                                    <label className={styles.qtLabel}>Qt</label>
                                    <input  className={styles.qtInput} placeholder="Enter quantity" onChange={e => setAllergyQt(e.target.value)}></input>
                                    <select>
                                        <option value="g">g</option>
                                        <option value="kg">kg</option>
                                        <option value="lbs">lbs</option>
                                        <option value="lb">lb</option>
                                    </select>
                                </div>
                            </div>
                        {/* </div> */}
                        <Sauces></Sauces>
                        <div className={styles.submitContainer} >
                            <input className={styles.formBtn} type="submit" value="Submit" />
                        </div>   
                    </div>
                </form>
    </div>)
}

export default Form;