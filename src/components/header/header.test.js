import React from "react";
import {Header} from "./header";
import {expect, it} from "@jest/globals";
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const userTest = {email: `valera32@mail.ru`};

it(`Should Header render correctly`, () => {
  const header = shallow(<Header
    authorizationStatus={`AUTH`}
    user={userTest}
  />);

  expect(shallowToJson(header)).toMatchSnapshot();
});
