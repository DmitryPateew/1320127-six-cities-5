import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CityItem from "./cityItem";

configure({adapter: new Adapter()});

it(`Click on change city in header`, () => {
  const onChange = jest.fn();
  const screen = shallow(<CityItem changeCity={onChange} activeCity={`NeyYork`} city={`NeyYork`}/>
  );
  screen.find(`.locations__item-link`).simulate(`click`);
  expect(onChange).toHaveBeenCalledTimes(1);
});
