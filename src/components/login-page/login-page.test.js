import React from "react";
import {LoginPage} from "./login-page";
import {expect, it} from "@jest/globals";
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`Should LoginPage render correctly`, () => {
  const tree = shallow(<LoginPage
    login={() => {
    }}
  />);
  expect(shallowToJson(tree)).toMatchSnapshot();
});
