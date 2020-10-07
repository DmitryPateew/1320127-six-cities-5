import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  QUANTITY_OFFER: 250
};

ReactDOM.render(<App quantityOffer={Settings.QUANTITY_OFFER}/>, document.querySelector(`#root`)
);
