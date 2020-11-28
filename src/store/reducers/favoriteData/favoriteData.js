import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  favorites: [],
};

const favoriteData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD__FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });
  }
  return state;
};

export {favoriteData};
