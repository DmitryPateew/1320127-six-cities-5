import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {TypeOfHosing} from "../../constant";
import ReviewForm from "../review-form/review-form";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Header from "../header/header";
import {AuthorizationStatus} from "../../constant";
import {starWith} from "../../main-logic";
import {fetchCommentList, fetchNearList} from "../../store/api-actions";
import NearPlaceList from "../near-place-list/near-place-list";
import Map from "../map/map";
import {TypeOfComponent} from "../../constant";
import {sortRevievsFromFresh} from "../../main-logic";
import {formatCommentDate} from "../../main-logic";


class OfferPage extends PureComponent {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.loadNearOffers(this.id);
    this.props.loadComments(this.id);
  }

  render() {
    const {offers, authorizationStatus, comments} = this.props;
    const offerExact = offers.find((offer) => offer.id.toString() === this.id);
    const sortetComments = sortRevievsFromFresh(comments);
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offerExact.photos.map((photo, i) => (
                  <div key={i} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{offerExact.premium === true ? `Premium` : `Usual`}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offerExact.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: starWith(offerExact.rating) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offerExact.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offerExact.typeOfHousing}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offerExact.countBedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offerExact.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offerExact.pricePerNight}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offerExact.facilities.map((facilit, i) => (
                      <li key={i} className="property__inside-item">
                        {facilit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offerExact.ownerInformation.photo} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {offerExact.ownerInformation.name}</span>
                    <span className="property__user-status">
                      {offerExact.ownerInformation.super === true ? `Pro` : `Usual`}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offerExact.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span
                    className="reviews__amount">{comments.length ? comments.length : `0`}</span>
                  </h2>
                  <ul className="reviews__list">
                    {sortetComments.slice(0, 10).map((comment, i) => (
                      <li key={i} className="reviews__item">
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={comment.user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
                          </div>
                          <span className="reviews__user-name">
                            {comment.user.name}</span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: starWith(comment.rating) + `%`}}></span>
                              <span className="visually-hidden">Rating{comment.rating}</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {comment.comment}
                          </p>
                          <time className="reviews__time" dateTime="2019-04-24">{formatCommentDate(comment.date)}</time>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {authorizationStatus === AuthorizationStatus.AUTH ? <ReviewForm id={this.id}/> : ``}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map coords={offerExact.coords} type={TypeOfComponent.OFFER}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <NearPlaceList/>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchCommentList(id));
  },
  loadNearOffers(id) {
    dispatch(fetchNearList(id));
  },
});

const mapStateToProps = ({DATA, USER, COMMENT, NEARBY}) => ({
  data: NEARBY.nearby,
  offers: DATA.offers,
  authorizationStatus: USER.authorizationStatus,
  comments: COMMENT.comments,
});

OfferPage.propTypes = {
  match: PropTypes.any.isRequired,
  comments: PropTypes.array,
  loadNearOffers: PropTypes.func.isRequired,
  data: PropTypes.array,
  loadComments: PropTypes.func,
  authorizationStatus: PropTypes.any,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        photos: PropTypes.array.isRequired,
        premium: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        typeOfHousing: PropTypes.oneOf([TypeOfHosing.APARTMENT, TypeOfHosing.HOTEL, TypeOfHosing.HOUSE, TypeOfHosing.ROOM]).isRequired,
        countBedrooms: PropTypes.number.isRequired,
        maxAdults: PropTypes.number.isRequired,
        pricePerNight: PropTypes.number.isRequired,
        facilities: PropTypes.array.isRequired,
        ownerInformation: PropTypes.shape({
          photo: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          super: PropTypes.bool.isRequired,
        }),
        description: PropTypes.string.isRequired,
        reviews: PropTypes.array,
      }
      ))
};
export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferPage));
