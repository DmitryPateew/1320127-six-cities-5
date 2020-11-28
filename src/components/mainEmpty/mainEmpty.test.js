import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./mainEmpty";
import {expect, it} from "@jest/globals";

it(`Should MainEmpty render correctly`, () => {
  const empty = renderer.create(<MainEmpty
    currentCity={`NewYork`}
  />)
    .toJSON();

  expect(empty).toMatchSnapshot();
});
