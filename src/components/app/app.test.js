import {expect, it} from "@jest/globals";
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import React from "react";
import App from "./app";

it(`Should app render correctly`, () => {
  const app = shallow(<App/>);
  expect(shallowToJson(app)).toMatchSnapshot();
});
