import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {favoriteData} from "./favorite-data";
import {fetchFavoriteList} from "../../api-actions";

const api = createAPI(() => {
});

const favorites = [{
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
    // eslint-disable-next-line camelcase
    avatar_url: `img/1.png`,
    id: 3,
    // eslint-disable-next-line camelcase
    is_pro: true,
    name: `Angelina`
  },
  id: 1,
  images: [`img/1.png`, `img/2.png`],
  // eslint-disable-next-line camelcase
  is_favorite: false,
  // eslint-disable-next-line camelcase
  is_premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  // eslint-disable-next-line camelcase
  max_adults: 4,
  // eslint-disable-next-line camelcase
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
    // eslint-disable-next-line camelcase
    avatar_url: `img/1.png`,
    id: 3,
    // eslint-disable-next-line camelcase
    is_pro: true,
    name: `Angelina`
  },
  id: 3,
  images: [`img/1.png`, `img/2.png`],
  favorite: false,
  // eslint-disable-next-line camelcase
  is_premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  // eslint-disable-next-line camelcase
  max_adults: 4,
  // eslint-disable-next-line camelcase
  preview_image: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
}];

const favoritesSaved = [{
  price: 120,
  // eslint-disable-next-line camelcase
  preview_image: `img/1.png`,
  bedrooms: 3,
  images: [`img/1.png`, `img/2.png`],
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  // eslint-disable-next-line camelcase
  is_premium: false,
  type: `apartment`,
  countBedrooms: 3,
  city: `Amsterdam`,
  coords: [52.35514938496378, 4.673877537499948],
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  facilities: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  ownerInformation: {
    photo: `img/1.png`,
    id: 3,
    super: true,
    name: `Angelina`
  },
  id: 1,
  photos: [`img/1.png`, `img/2.png`],
  favorite: false,
  premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  // eslint-disable-next-line camelcase
  max_adults: 4,
  prewiewImage: `img/1.png`,
  pricePerNight: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  typeOfHousing: `apartment`,
  reviews: [],
  cityLocation: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
  },
  host: {
    // eslint-disable-next-line camelcase
    avatar_url: `img/1.png`,
    id: 3,
    // eslint-disable-next-line camelcase
    is_pro: true,
    name: `Angelina`
  },
}, {
  pricePerNight: 120,
  images: [`img/1.png`, `img/2.png`],
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  bedrooms: 3,
  premium: false,
  // eslint-disable-next-line camelcase
  is_premium: false,
  type: `apartment`,
  countBedrooms: 3,
  city: `Amsterdam`,
  coords: [52.35514938496378, 4.673877537499948],
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  facilities: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  ownerInformation: {
    photo: `img/1.png`,
    id: 3,
    super: true,
    name: `Angelina`
  },
  id: 3,
  photos: [`img/1.png`, `img/2.png`],
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  // eslint-disable-next-line camelcase
  max_adults: 4,
  // eslint-disable-next-line camelcase
  preview_image: `img/1.png`,
  prewiewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  typeOfHousing: `apartment`,
  reviews: [],
  cityLocation: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
  },
  host: {
    // eslint-disable-next-line camelcase
    avatar_url: `img/1.png`,
    id: 3,
    // eslint-disable-next-line camelcase
    is_pro: true,
    name: `Angelina`
  },
}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(favoriteData(void 0, {})).toEqual({
    favorites: [],
  });
});

it(`Reducer should update comments by load favorites`, () => {
  expect(favoriteData({
    favorites: [],
  }, {
    type: ActionType.LOAD_FAVORITES,
    payload: favorites,
  })).toEqual({
    favorites,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavoriteList();

    apiMock
      .onGet(`/favorite`)
      .reply(200, favorites);

    return favoriteLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: favoritesSaved,
        });
      });
  });
});
