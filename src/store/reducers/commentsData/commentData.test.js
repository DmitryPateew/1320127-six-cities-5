import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {commentData} from "./commentData";
import {fetchCommentList} from "../../apiActions";

const api = createAPI(() => {
});

const comments = [{
  id: 1,
  user: {
    id: 14,
    isPro: true,
    name: `Corey`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`
  },
  rating: 5,
  comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
  date: `2020-11-01T13:38:44.752Z`
}, {
  id: 2,
  user: {
    id: 12,
    isPro: true,
    name: `Isaac`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`
  },
  rating: 3,
  comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
  date: `2020-11-01T13:38:44.752Z`
}, {
  id: 3,
  user: {
    id: 15,
    isPro: false,
    name: `Kendall`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`
  },
  rating: 3,
  comment: `I stayed here for one night and it was an unpleasant experience.`,
  date: `2020-11-01T13:38:44.752Z`
}]
;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(commentData(void 0, {})).toEqual({
    comments: [],
  });
});

it(`Reducer should update comments by load comments`, () => {
  expect(commentData({
    comments: [],
  }, {
    type: ActionType.LOAD__COMMENTS,
    payload: comments,
  })).toEqual({
    comments,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /comments/2`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchCommentList(2);

    apiMock
      .onGet(`/comments/2`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD__COMMENTS,
          payload: [{fake: true}],
        });
      });
  });
});
