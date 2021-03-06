import React from "react";
import {OfferPage} from "./offer-page";
import {expect, it} from "@jest/globals";
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const offersTest = [{
  id: 1,
  city: `Hamburg`,
  coords: [52.3909553943508, 4.85309666406198],
  favorite: true,
  photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
  title: `Beautiful & luxurious studio at great location`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  premium: false,
  typeOfHousing: `room`,
  rating: 1,
  countBedrooms: 3,
  maxAdults: 3,
  pricePerNight: 150,
  facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
}, {
  id: 2,
  city: `Hamburg`,
  coords: [52.3909553943508, 4.85309666406198],
  favorite: true,
  photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
  title: `Beautiful & luxurious studio at great location`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  premium: false,
  typeOfHousing: `room`,
  rating: 1,
  countBedrooms: 3,
  maxAdults: 3,
  pricePerNight: 150,
  facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
  ownerInformation: {
    photo: `img/apartment-02.jpg`,
    name: `Vasja`,
    super: true,
    id: 2,
  },
}];

const testComments = [
  {
    id: 1,
    name: `Wadim`,
    rating: 4,
    date: `2019-05-08T14:13:56.569Z`,
    comment: `ffdlkmv;lfdmv;ldfm;vlmdf;`,
    user: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: false,
      name: `Andrey`,
    }
  },
  {
    id: 2,
    name: `Wadim`,
    rating: 4,
    date: `2019-05-08T14:13:56.569Z`,
    comment: `Wadim`,
    user: {
      avatarUrl: `img/1.png`,
      id: 8,
      isPro: false,
      name: `Andrey`,
    }
  },
  {
    id: 3,
    authorPhoto: `img/avatar-max.jpg`,
    name: `Wadim`,
    rating: 4,
    date: `2019-05-08T14:13:56.569Z`,
    comment: `sdvdsvsdv`,
    user: {
      avatarUrl: `img/1.png`,
      id: 10,
      isPro: false,
      name: `Andrey`,
    }
  }
];

const matchTest = {params: {id: `2`}};

it(`Should OfferPage render correctly`, () => {
  const offerPage = shallow(<OfferPage
    loadComments={()=>{}}
    comments={testComments}
    offers={offersTest}
    authorizationStatus={`AUTH`}
    loadNearOffers={()=>{}}
    match={matchTest}
  />);

  expect(shallowToJson(offerPage)).toMatchSnapshot();
});
