import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import OfferPage from "../offer-page/offer-page";
import FavoritePage from "../favorite-page/favorite-page";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <PrivateRoute exact path="/favorites" render={() => {
          return (<FavoritePage/>);
        }}>
        </PrivateRoute>
        <Route exact path="/offer/:id">
          <OfferPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};
export default App;

