import React, {PureComponent} from "react";
import FavoriteItem from "../favorite-item/favorite-item";
import PropTypes from "prop-types";
import {TypeOfHosing} from "../../constant";


class FavoriteList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="favorites__places">
        {this.props.offers.map((offer, i) => (<FavoriteItem key={i} offer={offer}/>))}
      </div>
    );
  }
}


FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        favorite: PropTypes.bool.isRequired,
        photos: PropTypes.array.isRequired,
        premium: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        typeOfHousing: PropTypes.oneOf([TypeOfHosing.APARTMENT, TypeOfHosing.HOTEL, TypeOfHosing.HOUSE, TypeOfHosing.ROOM]).isRequired,
        countBedrooms: PropTypes.number.isRequired,
        maxAdults: PropTypes.number.isRequired,
        pricePerNight: PropTypes.number.isRequired,
        facilities: PropTypes.array.isRequired,
        description: PropTypes.string.isRequired,
      }
      ))
};

export default FavoriteList;
