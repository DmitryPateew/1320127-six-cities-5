import {expect, it} from "@jest/globals";
import renderer from "react-test-renderer";
import React from "react";
import Map from "./map";

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
  facilities: [`Wi-Fi`, `Heating`, `Kitchen`]
}];

const nearbyTest = [{
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
  facilities: [`Wi-Fi`, `Heating`, `Kitchen`]
}];

it(`Should Map render correctly`, () => {
  const map = renderer.create(<Map
    activeCity={`NewYork`}
    offers={offersTest}
    nearby={nearbyTest}
    type={`MAIN`}
    mouseOverId={3}
  />)
    .toJSON();

  expect(map).toMatchSnapshot();
});
