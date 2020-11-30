import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {user} from "./user";
import {login} from "../../apiActions";
import {AuthorizationStatus} from "../../../constant";

const api = createAPI(() => {
});

const userTest = {
  login: `vasja21@mail.ru`,
  pass: `1234`
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  });
});

it(`Reducer should update comments by load offers`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  }, {
    type: ActionType.LOAD_CITYS,
    payload: userTest,
  })).toEqual({
    userTest,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userLoader = login(userTest);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return userLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SAVE_USER,
          payload: [{fake: true}],
        });
      });
  });
});
