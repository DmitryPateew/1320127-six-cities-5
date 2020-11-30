import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {reviewData} from "./reviewData";
import {sendComment} from "../../apiActions";

const api = createAPI(() => {
});

const review = {comment: `lkmdclkdsmcklm`, rating: 2};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reviewData(void 0, {})).toEqual({
    review: {comment: null, rating: null},
  });
});

it(`Reducer should update comments by load reviewData`, () => {
  expect(reviewData({
    review: {comment: null, rating: null},
  }, {
    type: ActionType.LOAD_CITYS,
    payload: review,
  })).toEqual({
    review,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addEwview = sendComment(2, {comment: `lkmdclkdsmcklm`, rating: 2});

    apiMock
      .onPost(`/comments/2`)
      .reply(200, {fake: true});

    return addEwview(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REVIEW__ADD,
          payload: {fake: true},
        });
      });
  });
});
