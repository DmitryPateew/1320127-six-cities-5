import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  activeCity: `Paris`,
  activeFilter: `Popular`,
  mouseOverId: null,
  toggle: false,
};

const filterActive = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        activeFilter: action.payload,
      });
    case ActionType.CHANGE_TOGGLE_FILTER:
      return extend(state, {
        toggle: action.payload,
      });
    case ActionType.CHANGE_OVER_ID: {
      return extend(state, {
        mouseOverId: action.payload,
      });
    }
  }

  return state;
};

export {filterActive};
