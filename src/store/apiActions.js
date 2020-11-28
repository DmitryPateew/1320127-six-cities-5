import {
  loadCitys,
  ActionCreator,
  redirectToRoute,
  loadComments,
  loadNearby,
  loadFavorite,
  changeFavorite,
  saveUser,
} from "./action";
import {AuthorizationStatus} from "../constant";
import {adaptToClient} from "../adapter";

export const fetchCityList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadCitys(data.map(adaptToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(saveUser(data)))
    .then(() => dispatch(redirectToRoute(`/favorites`)))
);

export const fetchCommentList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/` + id)
    .then(({data}) => dispatch(loadComments(data)))
);

export const fetchNearList = (id) => (dispatch, _getState, api) => (
  api.get(`hotels/` + id + `/nearby`)
    .then(({data}) => dispatch(loadNearby(data.map(adaptToClient))))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavorite(data.map(adaptToClient))))
);

export const changeToFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/` + id + `/` + status)
    .then((data) => dispatch(changeFavorite(data)))
);

export const sendComment = (id, {comment: comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/` + id, {comment, rating})
   .then(({data}) => dispatch(loadComments(data)))
);

