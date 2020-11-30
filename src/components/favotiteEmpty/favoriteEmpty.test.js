import React from "react";
import renderer from "react-test-renderer";
import FavoriteEmpty from "./favoriteEmpty";
import {expect, it} from "@jest/globals";


it(`Should favoriteEmpty render correctly`, () => {
  const favoriteEmpty = renderer.create(<FavoriteEmpty
  />)
    .toJSON();

  expect(favoriteEmpty).toMatchSnapshot();
});
