import {ActionType} from "./action";
import {extend} from "../utils";

const initialState = {
  activeCity: `Amsterdam`,
  activeFilter: `Popular`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE__CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.CHANGE__FILTER:
      return extend(state, {
        activeFilter: action.payload,
      });
  }

  return state;
};

export {reducer};
