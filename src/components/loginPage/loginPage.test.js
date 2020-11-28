import React from "react";
import renderer from "react-test-renderer";
import {LoginPage} from "./loginPage";
import {expect, it} from "@jest/globals";

it(`Should LoginPage render correctly`, () => {
  const tree = renderer.create(<LoginPage
    login={() => {
    }}
  />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
