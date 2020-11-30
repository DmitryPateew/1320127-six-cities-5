import React from "react";
import renderer from "react-test-renderer";
import CityItem from "./cityItem";
import {expect, it} from "@jest/globals";

it(`Should CityItem render correctly`, () => {
  const item = renderer.create(<CityItem
    changeCity={() => {
    }}
    city={`NewYork`}
    activeCity={`NewYork`}
  />)
    .toJSON();

  expect(item).toMatchSnapshot();
});
