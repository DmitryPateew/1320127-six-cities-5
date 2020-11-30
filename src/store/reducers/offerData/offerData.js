import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {replaseOffers} from "../../../mainLogic";

const initialState = {
  offers: [],
};


const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CITYS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.CHANGE__FAVORITE:
      return extend(state, {
        offers: replaseOffers(state.offers, action.payload.data),
      });
  }
  return state;
};

export {offerData};
