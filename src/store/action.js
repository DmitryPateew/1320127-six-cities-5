export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_OVER_ID: `CHANGE_OVER_ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_CITYS: `LOAD_CITYS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SAVE_USER: `SAVE_USER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEARBY: `LOAD_NEARBY`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  CHANGE_FAVORITE: `CHANGE_FAVORITE`,
  REVIEW_ADD: `REVIEW_ADD`,
  CHANGE_TOGGLE_FILTER: `CHANGE_TOGGLE_FILTER`,
};

export const ActionCreator = {
  changeCity: (activeCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: activeCity,
  }),
  changeFilter: (activeFilter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: activeFilter,
  }),
  changeOverId: (overId) => ({
    type: ActionType.CHANGE_OVER_ID,
    payload: overId,
  }),
  requireAuthorization: (status, login) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
    payload2: login,
  }),
  changeToggleFilter: (toggle) => ({
    type: ActionType.CHANGE_TOGGLE_FILTER,
    payload: toggle,
  }),
};

export const loadCitys = (citys) => ({
  type: ActionType.LOAD_CITYS,
  payload: citys,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const saveUser = (user) => ({
  type: ActionType.SAVE_USER,
  payload: user,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const loadNearby = (offers) => ({
  type: ActionType.LOAD_NEARBY,
  payload: offers,
});

export const loadFavorite = (favorites) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favorites,
});

export const changeFavorite = (offer) => ({
  type: ActionType.CHANGE_FAVORITE,
  payload: offer,
});

export const reviewAdd = (comment, rating) => ({
  type: ActionType.REVIEW_ADD,
  comment0: comment,
  rating0: rating,
});
