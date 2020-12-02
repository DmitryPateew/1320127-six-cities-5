import {AuthorizationStatus} from "../../constant";
import {ActionType} from "../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }
  return state;
};

export {testReducer};
