import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card";
import PropTypes from "prop-types";
import {filterByActiveCity, sortByActiveFilter} from "../../main-logic";
import {connect} from "react-redux";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const OfferWrapper = withActiveItem(PlaceCard);

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, activeCity, activeFilter, changeOverId} = this.props;
    const nearCard = true;
    return (
      <div className="cities__places-list places__list tabs__content">
        {sortByActiveFilter(filterByActiveCity(offers, activeCity), activeFilter).map((offer) => (
          <OfferWrapper key={offer.id} changeOverId={changeOverId} offer={offer} nearCard={nearCard}/>))}
      </div>
    );
  }
}

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

OfferList.propTypes = {
  changeOverId: PropTypes.func,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  activeFilter: PropTypes.string.isRequired,
};
export {OfferList};
export default connect(mapStateToProps)(OfferList);
