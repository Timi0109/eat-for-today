import React, {useState} from "react";
import { Link,useLocation } from 'react-router-dom';
import styles from "./RecipeContent.module.css";
import TextField from '@material-ui/core/TextField';
import {withStyles } from "@material-ui/core/styles";
import { pink } from '@material-ui/core/colors';

const RecipeContent = ({food, recipes}) => {
  
const CssTextField = withStyles({
    root: {
        '& .MuiInput-underline:before':{
            borderBottomColor: "#ea86b6",
            "&:hover": {
                borderBottomColor: "#ea86b6",
            },
        },
        '& label.Mui-focused': {
            color: "#ea86b6"
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: "#ea86b6",
        }
        
    },
   
  })(TextField);

    const meat = food.Meat !== undefined ?food.Meat.toLowerCase() :null;
    const veggies = food.Veggies !== undefined ?food.Veggies.toLowerCase() :null;
    const others = food.Others !== undefined ?food.Others.toLowerCase() :null;
    const [filterName, setFilterName] = useState(null);
    const [detail, setDetail] = useState(false);

    let filterRecipe;
    if(meat === null && veggies === null && others === null){
        filterRecipe = recipes.slice(0);
    }else{
        filterRecipe = recipes.filter(x =>  x.name.toLowerCase().includes(meat) || x.name.toLowerCase().includes(veggies) ||
                                        x.name.toLowerCase().includes(others) || (x.meat !== undefined && x.meat.toLowerCase().includes(meat)) ||
                                        (x.veggies !== undefined && x.veggies.toLowerCase().includes(veggies)) || (x.others !== undefined && x.others.toLowerCase().includes(others)));
    }

    if(filterName !== null){
        filterRecipe = filterRecipe.filter((x) => x.name.toLowerCase().includes(filterName.toLowerCase()) ||
                                            (x.meat !== undefined && x.meat.toLowerCase().includes(filterName.toLowerCase())) ||
                                            (x.veggies !== undefined && x.veggies.toLowerCase().includes(filterName.toLowerCase())) || 
                                            (x.others !== undefined && x.others.toLowerCase().includes(filterName.toLowerCase())));
    }

    return (
        <div className={styles.contentContainer}>
              
                <div className={styles.searchContainer}> 
                    {/* <CssTextField  className={styles.searchInput} id="custom-css-standard-input" variant="standard" label="Search by name" onChange={(e) => {setFilterName(e.target.value)}}></CssTextField> */}
                    {/* <CssTextField className={styles.searchInput} label="Search by name" variant="outlined"  onChange={(e) => {setFilterName(e.target.value)}}/> */}
                    <input className={styles.searchInput} placeholder="Search by name" onChange={e => {setFilterName(e.target.value)}}></input>
                </div>
            
                <div className={styles.listContainer}>
                    <div className={styles.outerRecipeContainer} >
                    {filterRecipe.map((item, id)=> {
                        return (
                            <div className={styles.interListContainer} key={id}>
                                <div className={styles.recipeContainer} >
                                    <Link className={styles.link} to={{pathname: `/recipe-list/${item.name}`, state: {item}}}>
                                        <img className={styles.recipeImg} src={item.url} alt="recipe img"></img>
                                    </Link>
                                    <Link className={styles.link} to={{pathname: `/recipe-list/${item.name}`, state: {item}}}>
                                        <div className={styles.title}>
                                            <p className={styles.recipeName}>{item.name}</p>
                                            {item.meat ?<p className={styles.meat}>Meat: {item.meat}</p> :null}
                                            {item.veggies ?<p className={styles.veggies}>Veggies: {item.veggies}</p> :null}
                                        </div>
                                    </Link>
                                    
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })}
                    </div>
                </div>
        </div>
    )
}

export default RecipeContent