import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../mainPage/mainPage";
import LoginPage from "../loginPage/loginPage";
import OfferPage from "../offerPge/offerPage";
import FavoritePage from "../favoritePage/favoritePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/favorites">
          <FavoritePage/>
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};
export default App;

