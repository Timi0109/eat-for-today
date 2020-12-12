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
          <Route path="/" exact>
           <HomePage></HomePage>
          </Route>
          <Route path="/recipes" exact>
            <RecipePage></RecipePage>
          </Route>
          <Route path="/recipe-list" exact>
            <RecipeList></RecipeList>
          </Route>
          <Route path="/recipe-list/">
            <RecipeDetail></RecipeDetail>
          </Route>
          <Route path="/login" exact>
            <Authentication></Authentication>
          </Route>
          <Route path="/login/">
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

