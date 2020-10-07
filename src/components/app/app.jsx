import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../mainPage/mainPage";
import LoginPage from "../loginPage/loginPage";
import OfferPage from "../offerPge/offerPage";
import FavoritePage from "../favoritePage/favoritePage";

const App = (props) => {
  const {quantityOffer} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage quantityOffer={quantityOffer}/>
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

App.propTypes = {
  quantityOffer: PropTypes.number.isRequired,
};

export default App;

