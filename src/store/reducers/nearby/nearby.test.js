import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {nearbyData} from "./nearbyData";
import {fetchNearList} from "../../apiActions";

const api = createAPI(() => {
});

const nearby = [{
  bedrooms: 3,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatar_url: `img/1.png`,
    id: 3,
    is_pro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`img/1.png`, `img/2.png`],
  is_favorite: false,
  is_premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  max_adults: 4,
  preview_image: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
}, {
  bedrooms: 3,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatar_url: `img/1.png`,
    id: 3,
    is_pro: true,
    name: `Angelina`
  },
  id: 2,
  images: [`img/1.png`, `img/2.png`],
  is_favorite: false,
  is_premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  max_adults: 4,
  preview_image: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(nearbyData(void 0, {})).toEqual({
    nearby: [],
  });
});

it(`Reducer should update comments by load nearby`, () => {
  expect(nearbyData({
    nearby: [],
  }, {
    type: ActionType.LOAD__NEARBY,
    payload: nearby,
  })).toEqual({
    nearby,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyLoader = fetchNearList(2);

    apiMock
      .onGet(`hotels/2/nearby`)
      .reply(200, [{fake: true}]);

    return nearbyLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD__NEARBY,
          payload: [{fake: true}],
        });
      });
  });
});
