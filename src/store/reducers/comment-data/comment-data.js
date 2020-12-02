import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  comments: [],
};

const commentData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }
  return state;
};

export {commentData};
