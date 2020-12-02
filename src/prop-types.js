import PropTypes from 'prop-types';
import {TypeOfHosing} from "./constant";

export const offerProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  typeOfHousing: PropTypes.oneOf([TypeOfHosing.APARTMENT, TypeOfHosing.HOTEL, TypeOfHosing.HOUSE, TypeOfHosing.ROOM]).isRequired,
});
