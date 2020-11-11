import PropTypes from 'prop-types';
import {TYPE_OF_HOUSING} from "./constant";

export const offerProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  typeOfHousing: PropTypes.oneOf([TYPE_OF_HOUSING.APARTMENT, TYPE_OF_HOUSING.HOTEL, TYPE_OF_HOUSING.HOUSE, TYPE_OF_HOUSING.ROOM]).isRequired,
});
