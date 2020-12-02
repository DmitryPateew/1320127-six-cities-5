import {combineReducers} from "redux";
import {offerData} from "./offer-data/offer-data";
import {filterActive} from "./filter-active/filter-active";
import {user} from "./user/user";
import {commentData} from "./comment-data/comment-data";
import {nearbyData} from "./nearby-data/nearby-data";
import {favoriteData} from "./favorite-data/favorite-data";
import {reviewData} from "./review-data/review-data";

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
