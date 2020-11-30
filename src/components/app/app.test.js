import {expect, it} from "@jest/globals";
import renderer from "react-test-renderer";

import React from "react";
import App from "./app";

it(`Should app render correctly`, () => {
  const app = renderer.create(<App/>)
    .toJSON();

  expect(app).toMatchSnapshot();
});
