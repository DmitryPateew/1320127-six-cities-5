import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty";
import {expect, it} from "@jest/globals";

it(`Should MainEmpty render correctly`, () => {
  const empty = renderer.create(<MainEmpty
    currentCity={`NewYork`}
  />)
    .toJSON();

  expect(empty).toMatchSnapshot();
});
