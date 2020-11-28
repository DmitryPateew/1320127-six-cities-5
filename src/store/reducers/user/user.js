import {AuthorizationStatus} from "../../../constant";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SAVE_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
  }

  return state;
};

export {user};
