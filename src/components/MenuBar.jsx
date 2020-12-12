/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./MenuBar.css";


const  MenuBar = () =>{
    return (
        <nav className="Nav"> 
            <a className="Nav-child" href="/">Home</a>
            <a className="Nav-child" href="/recipes">Recipe</a>
            <a className="Nav-child" href="/login">LogIn</a>
        </nav>
    );
}

export default MenuBar