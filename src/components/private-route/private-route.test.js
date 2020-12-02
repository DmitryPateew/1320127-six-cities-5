import {expect, it} from "@jest/globals";
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import {PrivateRoute} from "./private-route";

Enzyme.configure({adapter: new Adapter()});

it(`Should priveteRoute render correctly`, () => {
  const router = shallow(<PrivateRoute path={`/favorites`} exact={false} render={() => {
  }} authorizationStatus={`NO_AUTH`}/>);
  expect(shallowToJson(router)).toMatchSnapshot();
});
