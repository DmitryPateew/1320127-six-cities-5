import React from "react";
import renderer from "react-test-renderer";
import {FavoriteItem} from "./favorite-item";
import {expect, it} from "@jest/globals";

const mockOffer = {
  id: 1,
  favorite: true,
  prewiewImage: `img/apartment-02.jpg`,
  photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
  title: `Beautiful & luxurious studio at great location`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  typeOfHousing: `room`,
  rating: 1,
  pricePerNight: 150,

};

it(`Should favoriteItem render correctly`, () => {
  const favoriteItem = renderer.create(<FavoriteItem
    offer={mockOffer}
    history={[]}
  />)
    .toJSON();

  expect(favoriteItem).toMatchSnapshot();
});
