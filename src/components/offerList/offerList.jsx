import React, {PureComponent} from "react";
import PlaceCard from "../placeCard/placeCard";
import PropTypes from "prop-types";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => (<PlaceCard key={`${i}`} offer={offer}/>))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferList;
