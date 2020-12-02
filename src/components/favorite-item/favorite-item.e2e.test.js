import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteItem} from "./favorite-item";

configure({adapter: new Adapter()});


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

const mockEvent = {
  preventDefault() {}
};

it(`Click card in favorite go to page offer`, () => {
  const onClick = jest.fn();
  const screen = shallow(<FavoriteItem offer={mockOffer} handleOfferClick={onClick}/>
  );
  screen.find(`.place-card`).simulate(`click`, mockEvent);
  expect(onClick).toHaveBeenCalledTimes(1);
});
