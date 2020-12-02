import React from "react";
import renderer from "react-test-renderer";
import SortList from "./sort-list";
import {expect, it} from "@jest/globals";

it(`Should SortList render correctly`, () => {
  const sortList = renderer.create(<SortList
    changeFilter={() => {
    }}
    activeFilter={`NewYork`}
    toggle={false}
  />)
    .toJSON();

  expect(sortList).toMatchSnapshot();
});
