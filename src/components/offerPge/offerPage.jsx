import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {TYPE_OF_HOUSING} from "../../constant";
import ReviewForm from "../reviewForm/reviewForm";
import {withRouter} from 'react-router-dom';

class OfferPage extends PureComponent {
  constructor(props) {
    super(props);
    const id = Number(this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf(`/`) + 1));
    const offerExact = this.props.offers.find((offer) => offer.id === id);
    this.state = {
      offer: offerExact
    };
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {this.state.offer.photos.map((photo, i) => (
                  <div key={i} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{this.state.offer.premium === true ? `Premium` : `Usual`}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {this.state.offer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{this.state.offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {this.state.offer.typeOfHousing}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {this.state.offer.countBedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {this.state.offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{this.state.offer.pricePerNight}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {this.state.offer.facilities.map((facilit, i) => (
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
                      <img className="property__avatar user__avatar" src={this.state.offer.ownerInformation.photo} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {this.state.offer.ownerInformation.name}</span>
                    <span className="property__user-status">
                      {this.state.offer.ownerInformation.super === true ? `Pro` : `Usual`}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {this.state.offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span
                    className="reviews__amount">{this.state.offer.reviews.length}</span></h2>
                  <ul className="reviews__list">
                    {this.state.offer.reviews.map((review, i) => (
                      <li key={i} className="reviews__item">
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={review.authorPhoto} width="54" height="54" alt="Reviews avatar"/>
                          </div>
                          <span className="reviews__user-name">
                            {review.name}</span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span className="visually-hidden">Rating{review.evulation}</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {review.evulationText}
                          </p>
                          <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ReviewForm/>
                </section>
              </div>
            </div>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;80</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Wood and stone place</a>
                    </h2>
                    <p className="place-card__type">Private room</p>
                  </div>
                </article>

                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;132</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Canal View Prinsengracht</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>

                <article className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;180</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Nice, cozy, warm big bed apartment</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferPage.propTypes = {
  location: PropTypes.any.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        photos: PropTypes.array.isRequired,
        premium: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        typeOfHousing: PropTypes.oneOf([TYPE_OF_HOUSING.APARTMENT, TYPE_OF_HOUSING.HOTEL, TYPE_OF_HOUSING.HOUSE, TYPE_OF_HOUSING.ROOM]).isRequired,
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

export default withRouter(OfferPage);
