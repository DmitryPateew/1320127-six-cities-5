import {combineReducers} from "redux";
import {offerData} from "../reducers/offerData/offerData";
import {filterActive} from "../reducers/filterActive/filterActive";
import {user} from "../reducers/user/user";
import {commentData} from "./commentsData/commentData";
import {nearbyData} from "./nearby/nearby";
import {favoriteData} from "../reducers/favoriteData/favoriteData";
import {reviewData} from "./review/reviewData";

export const NameSpace = {
  DATA: `DATA`,
  ACTIVE: `ACTIVE`,
  USER: `USER`,
  COMMENT: `COMMENT`,
  NEARBY: `NEARBY`,
  FAVORITE: `FAVORITE`,
  REVIEW: `REVIEW`,
};

export default combineReducers({
  [NameSpace.DATA]: offerData,
  [NameSpace.ACTIVE]: filterActive,
  [NameSpace.USER]: user,
  [NameSpace.COMMENT]: commentData,
  [NameSpace.NEARBY]: nearbyData,
  [NameSpace.FAVORITE]: favoriteData,
  [NameSpace.REVIEW]: reviewData,
});
