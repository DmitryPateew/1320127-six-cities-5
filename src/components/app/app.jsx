import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../mainPage/mainPage";
import LoginPage from "../loginPage/loginPage";
import OfferPage from "../offerPge/offerPage";
import FavoritePage from "../favoritePage/favoritePage";
import PrivateRoute from "../privateRoute/privateRoute";
import browserHistory from "../../browserHistory";

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

