import {ActionType} from "../../action";
import {filterActive} from "./filterActive";


const activeCity = `Minsk`;
const activeFilter = `To Low`;
const mouseOverId = 32;
const toggle = true;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filterActive(void 0, {})).toEqual({
    activeCity: `Amsterdam`,
    activeFilter: `Popular`,
    mouseOverId: null,
    toggle: false,
  });
});

it(`Reducer should update activeCity`, () => {
  expect(filterActive({
    activeCity: `Amsterdam`,
  }, {
    type: ActionType.CHANGE__CITY,
    payload: activeCity,
  })).toEqual({
    activeCity,
  });
});

it(`Reducer should update activeFilter`, () => {
  expect(filterActive({
    activeFilter: `Popular`,
  }, {
    type: ActionType.CHANGE__FILTER,
    payload: activeFilter,
  })).toEqual({
    activeFilter,
  });
});

it(`Reducer should update mouseOverId`, () => {
  expect(filterActive({
    mouseOverId: null,
  }, {
    type: ActionType.CHANGE__OVER__ID,
    payload: mouseOverId,
  })).toEqual({
    mouseOverId,
  });
});

it(`Reducer should update toggle`, () => {
  expect(filterActive({
    toggle: null,
  }, {
    type: ActionType.CHANGE__TOGGLE__FILTER,
    payload: toggle,
  })).toEqual({
    toggle,
  });
});
