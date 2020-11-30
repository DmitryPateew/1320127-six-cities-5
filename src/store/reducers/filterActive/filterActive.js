import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  activeCity: `Amsterdam`,
  activeFilter: `Popular`,
  mouseOverId: null,
  toggle: false,
};

const filterActive = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE__CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.CHANGE__FILTER:
      return extend(state, {
        activeFilter: action.payload,
      });
    case ActionType.CHANGE__TOGGLE__FILTER:
      return extend(state, {
        toggle: action.payload,
      });
    case ActionType.CHANGE__OVER__ID: {
      return extend(state, {
        mouseOverId: action.payload,
      });
    }
  }

  return state;
};

export {filterActive};
