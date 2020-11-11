export const ActionType = {
  CHANGE__CITY: `CHANGE__CITY`,
  CHANGE__FILTER: `CHANGE__FILTER`,
  CHANGE__OVER__ID: `CHANGE__OVER__ID`,
};

export const ActionCreator = {
  changeCity: (activeCity) => ({
    type: ActionType.CHANGE__CITY,
    payload: activeCity,
  }),
  changeFilter: (activeFilter) => ({
    type: ActionType.CHANGE__FILTER,
    payload: activeFilter,
  }),
  changeOverId: (overId) => ({
    type: ActionType.CHANGE__OVER__ID,
    payload: overId,
  }),
};
