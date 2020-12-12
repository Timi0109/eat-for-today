import React from "react";
import {Link} from "react-router-dom";
import meatIcon from "../../assets/meat.png";
import saladIcon from "../../assets/healthy-eating.png";
import pizzaIcon from "../../assets/pizza.png";
import ramenIcon from "../../assets/ramen.png";
import styles from "./RecipePage.module.css";

const NavIcon = ({setIdx, food}) => {
    return (
        <div className={styles.icons}>
                <Link to={{pathname:"/recipe-list", state:{food}}}>
                    <img onMouseEnter={() => setIdx(0)} src={meatIcon} className={styles.icon} alt="icon-img"></img>
                </Link>
                <Link to={{pathname:"/recipe-list", state:{food}}}>
                    <img onMouseEnter={() => setIdx(1)} src={saladIcon} className={styles.icon} alt="icon-img"></img>
                </Link>
                <Link to={{pathname:"/recipe-list", state:{food}}}>
                    <img onMouseEnter={() => setIdx(2)} src={pizzaIcon} className={styles.icon} alt="icon-img"></img>
                </Link>
                <Link to={{pathname:"/recipe-list", state:{food}}}>
                    <img onMouseEnter={() => setIdx(3)} src={ramenIcon} className={styles.icon} alt="icon-img"></img>
                </Link>
            </div>
    )

}

export default NavIcon;