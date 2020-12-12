import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from  "./components/HomePage/HomePage";
import RecipePage from './components/RecipePage/RecipePage';
import Authentication from './components/AuthenticationPage/Authentication';
import MyAccount from './components/MyAccountPage/MyAccount';
import RecipeDetail from './components/RecipePage/RecipeDetail';
import NoMatch from "./components/NoMatch";
import RecipeList from "./components/RecipePage/RecipeList";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact>
           <HomePage></HomePage>
          </Route>
          <Route path="/recipes" exact component={RecipePage} />
    
          <Route path="/recipe-list" exact component={RecipeList} />
        
          <Route path="/recipe-list/" component={RecipeDetail} />
            
          <Route path="/login" exact component={Authentication} />
            
          <Route path="/login/" component={MyAccount} />
            
          <Route component={NoMatch}>
          </Route>
        </Switch>
    </div>
  );
}

export default App;

