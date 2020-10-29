import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import offers from "./mocks/offers";
import {reducer} from "./store/reducer";

const Settings = {
  QUANTITY_OFFER: 250
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(<Provider store={store}><App quantityOffer={Settings.QUANTITY_OFFER} offers={offers}/></Provider>, document.querySelector(`#root`)
);
