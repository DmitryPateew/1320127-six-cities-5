import React from "react";
import {withActiveItem} from "./with-active-item";
import {expect, it} from "@jest/globals";
import PropTypes from "prop-types";
import Enzyme, {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {offerProp} from "../../prop-types";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {testReducer} from "../../store/reducers/test-reducer";

Enzyme.configure({adapter: new Adapter()});
const store = createStore(testReducer);

const MockComponent = (props) => {
  const {changeToFavorite} = props;

  return (
    <div>
      {changeToFavorite}
    </div>
  );
};

MockComponent.propTypes = {
  changeToFavorite: PropTypes.func.isRequired,
  history: PropTypes.any,
  changeOverId: PropTypes.func,
  offer: offerProp,
  authorizationStatus: PropTypes.string,
};

const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should withActiveItemTest render correctly`, () => {
  const withActiveItemTest = shallow(<Provider store={store}><MockComponentWrapped>
    <React.Fragment/>
  </MockComponentWrapped></Provider>);
  expect(shallowToJson(withActiveItemTest)).toMatchSnapshot();
});
