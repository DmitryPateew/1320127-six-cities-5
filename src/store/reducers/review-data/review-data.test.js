import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {reviewData} from "./review-data";
import {sendComment} from "../../api-actions";

const api = createAPI(() => {
});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reviewData(void 0, {})).toEqual({
    review: {comment: null, rating: null},
  });
});

it(`Reducer should update comments by load reviewData`, () => {
  expect(reviewData({
    review: {comment: null, rating: null},
  }, {
    type: ActionType.REVIEW_ADD,
    payload: {comment: `lkmdclkdsmcklm`, rating: `2`},
  })).toEqual({
    review: {comment: undefined, rating: undefined},
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addEwview = sendComment(`2`, {comment: `lkmdclkdsmcklm`, rating: `2`});

    apiMock
      .onPost(`/comments/2`)
      .reply(200, {fake: true});

    return addEwview(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
