export const ActionType = {
  CHANGE__CITY: `CHANGE__CITY`,
  CHANGE__FILTER: `CHANGE__FILTER`,
  CHANGE__OVER__ID: `CHANGE__OVER__ID`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_CITYS: `LOAD_CITYS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SAVE_USER: `SAVE_USER`,
  LOAD__COMMENTS: `LOAD__COMMENTS`,
  LOAD__NEARBY: `LOAD__NEARBY`,
  LOAD__FAVORITES: `LOAD__FAVORITES`,
  CHANGE__FAVORITE: `CHANGE__FAVORITE`,
  REVIEW__ADD: `REVIEW__ADD`,
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
  requireAuthorization: (status, login) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
    payload2: login,
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
  type: ActionType.LOAD__COMMENTS,
  payload: comments,
});

export const loadNearby = (offers) => ({
  type: ActionType.LOAD__NEARBY,
  payload: offers,
});

export const loadFavorite = (favorites) => ({
  type: ActionType.LOAD__FAVORITES,
  payload: favorites,
});

export const changeFavorite = (offer) => ({
  type: ActionType.CHANGE__FAVORITE,
  payload: offer,
});

export const reviewAdd = (comment, rating) => ({
  type: ActionType.REVIEW__ADD,
  comment0: comment,
  rating0: rating,
});
