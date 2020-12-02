import React, {PureComponent} from "react";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import {starWith} from "../../main-logic";

class FavoriteItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleOfferClick = this.handleOfferClick.bind(this);
  }

  handleOfferClick(evt) {
    evt.preventDefault();
    this.props.history.push(`/offer/${this.props.offer.id}`);
  }

  render() {
    const {offer} = this.props;
    return (
      <article onClick={this.handleOfferClick} className="favorites__card place-card">
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.prewiewImage} width="150" height="110" alt="Place image"/>
          </a>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.pricePerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={offer.favorite ? `place-card__bookmark-button  place-card__bookmark-button--active button` : `place-card__bookmark-button button`} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: starWith(offer.rating) + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.typeOfHousing}</p>
        </div>
      </article>
    );
  }
}

FavoriteItem.propTypes = {
  history: PropTypes.any,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    pricePerNight: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    typeOfHousing: PropTypes.string.isRequired,
    prewiewImage: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
  })
};

export {FavoriteItem};
export default withRouter(FavoriteItem);
