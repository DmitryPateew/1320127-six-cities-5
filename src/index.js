import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/reducers/rootReducer";
import {ActionCreator} from "./store/action";
import {fetchCityList, checkAuth} from "./store/apiActions";
import {AuthorizationStatus} from "./constant";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)), applyMiddleware(redirect)));

Promise.all([
  store.dispatch(fetchCityList()),
  store.dispatch(checkAuth()),
])
  .then(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector(`#root`));
  });
