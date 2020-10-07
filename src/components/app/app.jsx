import React from "react";
import PropTypes from "prop-types";
import MainPage from "../mainPage/mainPage";

const App = (props) => {
  const {quantityOffer} = props;

  return (
    <MainPage quantityOffer={quantityOffer} />
  );
};

App.propTypes = {
  quantityOffer: PropTypes.number.isRequired,
};

export default App;
