import {ActionType} from "../../action";
import {filterActive} from "./filter-active";


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
    type: ActionType.CHANGE_CITY,
    payload: activeCity,
  })).toEqual({
    activeCity,
  });
});

it(`Reducer should update activeFilter`, () => {
  expect(filterActive({
    activeFilter: `Popular`,
  }, {
    type: ActionType.CHANGE_FILTER,
    payload: activeFilter,
  })).toEqual({
    activeFilter,
  });
});

it(`Reducer should update mouseOverId`, () => {
  expect(filterActive({
    mouseOverId: null,
  }, {
    type: ActionType.CHANGE_OVER_ID,
    payload: mouseOverId,
  })).toEqual({
    mouseOverId,
  });
});

it(`Reducer should update toggle`, () => {
  expect(filterActive({
    toggle: null,
  }, {
    type: ActionType.CHANGE_TOGGLE_FILTER,
    payload: toggle,
  })).toEqual({
    toggle,
  });
});
