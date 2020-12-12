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
      <Router>
        <Switch>
          <Route path="/seainfo6150-final-project-webapp" exact>
           <HomePage></HomePage>
          </Route>
          <Route path="/seainfo6150-final-project-webapp/recipes" exact>
            <RecipePage></RecipePage>
          </Route>
          <Route path="/seainfo6150-final-project-webapp/recipe-list" exact>
            <RecipeList></RecipeList>
          </Route>
          <Route path="/seainfo6150-final-project-webapp/recipe-list/">
            <RecipeDetail></RecipeDetail>
          </Route>
          <Route path="/seainfo6150-final-project-webapp/login" exact>
            <Authentication></Authentication>
          </Route>
          <Route path="/seainfo6150-final-project-webapp/login/">
            <MyAccount></MyAccount>
          </Route>
          <Route component={NoMatch}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

