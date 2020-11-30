import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {expect, it} from "@jest/globals";

const userTest = {email: `valera32@mail.ru`};

it(`Should Header render correctly`, () => {
  const header = renderer.create(<Header
    authorizationStatus={`AUTH`}
    user={userTest}
  />)
    .toJSON();

  expect(header).toMatchSnapshot();
});
