import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./withActiveItem";
import {expect, it} from "@jest/globals";
import PropTypes from "prop-types";


const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should withActiveItemTest render correctly`, () => {
  const withActiveItemTest = renderer.create(<MockComponentWrapped>
    <React.Fragment/>
  </MockComponentWrapped>)
    .toJSON();

  expect(withActiveItemTest).toMatchSnapshot();
});
