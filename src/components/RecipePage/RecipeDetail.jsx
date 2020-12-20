import React, {useState} from "react";
import {Link, useLocation, useHistory} from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar.jsx";
import Title from "../Title.jsx";
import styles from "./RecipeDetail.module.css";
import Footer from "../Footer/Footer.jsx";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const RecipeDetail = ({item}) => {
    console.log(useLocation());
    const location = useLocation();
    const history = useHistory();
    const name = location.state.item.name;
    const meat = location.state.item.meat === undefined ?null :location.state.item.meat;
    const veggies = location.state.item.veggies === undefined ?null :location.state.item.veggies;
    const others = location.state.item.others === undefined ?null :location.state.item.others; 
    const url = location.state.item.url;
    const instructions = location.state.item.instruction;
    const [idx, setIdx] = useState(0);

    const handleBack = () => {
        history.goBack();
    }
    return (
        <div>
            <header className={styles.header}>
                <MenuBar></MenuBar>
                <Title></Title>
            </header>
            
            {/* <div className={styles.titleContainer}>
                <p className={styles.recipeTitle}>{name}</p>
                <button className={styles.back} onClick={() => handleBack()}>Back</button>
            </div> */}

            <div className={styles.container}>
                <p className={styles.recipeTitle}>{name}</p>
                <button className={styles.back} onClick={() => handleBack()}>Back</button>
                <div className={styles.content}>
                    <img className={styles.imgContent} src={url}></img>
                    <div className={styles.stepContainer}>
                        <p className={styles.stepIdx}>Step {idx+1}</p>
                        <div className={styles.steps}>
                            <ArrowBackIosIcon className={styles.icons} onClick={() => setIdx(idx=== 0 ?0 :idx-1)}>Prev</ArrowBackIosIcon>
                            <p className={styles.step}>{instructions[idx]}</p>
                            <ArrowForwardIosIcon  className={styles.icons} onClick={() => setIdx(idx === instructions.length-1 ?instructions.length-1 :idx+1)}>Next</ArrowForwardIosIcon>
                        </div>
                    </div>
                </div>
                
               
            </div>
            <Footer></Footer>
        </div>
    )
}

export default RecipeDetail;