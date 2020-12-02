import React from "react";
import PropTypes from "prop-types";

const CityItem = (props) => {
  const {city, activeCity, changeCity} = props;
  return (
    <li className="locations__item">
      <a onClick={() => changeCity(city)} className={activeCity === city ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CityItem;
