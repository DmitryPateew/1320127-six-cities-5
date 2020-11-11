import {ActionType} from "./action";
import {extend} from "../utils";
import offers from "../mocks/offers";

const initialState = {
  activeCity: `Amsterdam`,
  activeFilter: `Popular`,
  offers,
  mouseOverId: null,
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
    case ActionType.CHANGE__OVER__ID: {
      return extend(state, {
        mouseOverId: action.payload,
      });
    }
  }

  return state;
};

export {reducer};
