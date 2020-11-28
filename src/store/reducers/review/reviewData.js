import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  review: {comment: null, rating: null},
};

const reviewData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REVIEW__ADD:
      return extend(state, {
        review: {comment: action.comment0, rating: action.rating0},
      });
  }
  return state;
};

export {reviewData};
