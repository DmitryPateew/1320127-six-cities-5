import React, {PureComponent} from "react";
import PlaceCard from "../placeCard/placeCard";
import PropTypes from "prop-types";
import {filterByActiveCity, sortByActiveFilter} from "../../mainLogic";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, activeCity, activeFilter} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {sortByActiveFilter(filterByActiveCity(offers, activeCity), activeFilter).map((offer, i) => (
          <PlaceCard key={i} offer={offer}/>))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default OfferList;
