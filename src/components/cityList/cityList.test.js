import React from "react";
import renderer from "react-test-renderer";
import CityList from "./cityList";
import {expect, it} from "@jest/globals";

it(`Should cityList render correctly`, () => {
  const cityList = renderer.create(<CityList
    changeCity={() => {
    }}
    activeCity={`NewYork`}
  />)
    .toJSON();

  expect(cityList).toMatchSnapshot();
});
