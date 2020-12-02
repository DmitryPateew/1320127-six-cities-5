import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  nearby: [],
};

const nearbyData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEARBY:
      return extend(state, {
        nearby: action.payload,
      });
  }
  return state;
};

export {nearbyData};
