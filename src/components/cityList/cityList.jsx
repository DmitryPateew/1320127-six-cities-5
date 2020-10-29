import React from "react";
import {CITY_LIST} from "../../constant";
import PropTypes from "prop-types";
import CityItem from "../cityItem/cityItem";


const CityList = (props) => {
  const {activeCity, changeCity} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY_LIST.map((cityItem, i) => (
            <CityItem key={i} city={cityItem} activeCity={activeCity} changeCity={changeCity}/>))}
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CityList;
