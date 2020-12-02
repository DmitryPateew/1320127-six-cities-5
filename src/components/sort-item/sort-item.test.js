import React from "react";
import renderer from "react-test-renderer";
import SortItem from "./sort-item";
import {expect, it} from "@jest/globals";

it(`Should SortItem render correctly`, () => {
  const sortItem = renderer.create(<SortItem
    changeFilter={() => {
    }}
    filter={`NewYork`}
    activeFilter={`NewYork`}
  />)
    .toJSON();

  expect(sortItem).toMatchSnapshot();
});
