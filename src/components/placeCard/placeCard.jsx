import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerProp} from "../../propTypes";
import {starWith} from "../../mainLogic";


class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, handleOfferOnMouse, handleOfferOutMouse, handleOfferClick, handleAddInFavorite, nearCard} = this.props;
    return (
      <article onMouseOver={handleOfferOnMouse} onMouseOut={handleOfferOutMouse} className={nearCard ? `near-places__card place-card` : `cities__place-card place-card`}>
        {offer.premium ? <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``}
        <div className={nearCard ? `near-places__image-wrapper place-card__image-wrapper` : `cities__image-wrapper place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={offer.prewiewImage} width="260" height="200" alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.pricePerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button onClick={handleAddInFavorite} className={offer.favorite ? `place-card__bookmark-button  place-card__bookmark-button--active button` : `place-card__bookmark-button button`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: starWith(offer.rating) + `%`}}></span>
              <span className="visually-hidden">Rating{offer.rating}</span>
            </div>
          </div>
          <h2 onClick={handleOfferClick} className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.typeOfHousing}</p>
        </div>
      </article>
    );
  }
}


PlaceCard.propTypes = {
  handleAddInFavorite: PropTypes.func.isRequired,
  handleOfferOnMouse: PropTypes.func.isRequired,
  handleOfferOutMouse: PropTypes.func.isRequired,
  handleOfferClick: PropTypes.func.isRequired,
  offer: offerProp,
  nearCard: PropTypes.bool,
};

export default PlaceCard;
