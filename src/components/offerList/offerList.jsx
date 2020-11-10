import React, {PureComponent} from "react";
import PlaceCard from "../placeCard/placeCard";
import PropTypes from "prop-types";
import {filterByActiveCity, sortByActiveFilter} from "../../mainLogic";
import {connect} from "react-redux";
import withActiveItem from "../../hocs/withActiveItem/withActiveItem";

const OfferWrapper = withActiveItem(PlaceCard);

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, activeCity, activeFilter, changeOverId} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {sortByActiveFilter(filterByActiveCity(offers, activeCity), activeFilter).map((offer, i) => (
          <OfferWrapper key={i} changeOverId={changeOverId} offer={offer}/>))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: state.offers,
});

OfferList.propTypes = {
  changeOverId: PropTypes.func,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(OfferList);
