import React, {PureComponent} from "react";
import PlaceCard from "../placeCard/placeCard";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import withActiveItem from "../../hocs/withActiveItem/withActiveItem";
import {ActionCreator} from "../../store/action";


const OfferWrapper = withActiveItem(PlaceCard);

class NearPlaceList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {nearby, changeOverId} = this.props;
    return (
      <div className="near-places__list places__list">
        {nearby.map((offer) => (
          <OfferWrapper key={offer.id} changeOverId={changeOverId} offer={offer}/>))}
      </div>
    );
  }
}

const mapStateToProps = ({NEARBY, ACTIVE}) => ({
  nearby: NEARBY.nearby,
  activeCity: ACTIVE.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeOverId(overId) {
    dispatch(ActionCreator.changeOverId(overId));
  },
});

NearPlaceList.propTypes = {
  changeOverId: PropTypes.func,
  nearby: PropTypes.array.isRequired,
};

export {NearPlaceList};
export default connect(mapStateToProps, mapDispatchToProps)(NearPlaceList);
