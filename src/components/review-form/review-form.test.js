import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";
import {expect, it} from "@jest/globals";

const reviewTest = {
  rating: `1`,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
};

it(`Should ReviewForm render correctly`, () => {
  const reviewForm = renderer.create(<ReviewForm
    review={reviewTest}
    reviewAdd={() => {
    }}
    sendComment={() => {
    }}
    id={`2`}
  />)
    .toJSON();

  expect(reviewForm).toMatchSnapshot();
});
