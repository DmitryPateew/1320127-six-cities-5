import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';
import {offerProp} from "../../propTypes";
import {changeToFavorite} from "../../store/apiActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {switchToggle} from "../../mainLogic";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.handleOfferClick = this.handleOfferClick.bind(this);
      this.handleOfferOnMouse = this.handleOfferOnMouse.bind(this);
      this.handleOfferOutMouse = this.handleOfferOutMouse.bind(this);
      this.handleAddInFavorite = this.handleAddInFavorite.bind(this);
    }

    handleAddInFavorite(evt) {
      evt.preventDefault();
      this.props.changeToFavorite(this.props.offer.id, switchToggle(this.props.offer.favorite));
    }

    handleOfferClick(evt) {
      evt.preventDefault();
      this.setState = ({active: true});
      this.props.history.push(`/offer/${this.props.offer.id}`);
    }

    handleOfferOnMouse(evt) {
      evt.preventDefault();
      const {offer, changeOverId} = this.props;
      changeOverId(offer.id);
    }

    handleOfferOutMouse(evt) {
      evt.preventDefault();
      const {changeOverId} = this.props;
      changeOverId(null);
    }


    render() {
      return (<Component
        {...this.props}
        handleOfferOutMouse={this.handleOfferOutMouse}
        handleOfferOnMouse={this.handleOfferOnMouse}
        handleOfferClick={this.handleOfferClick}
        handleAddInFavorite={this.handleAddInFavorite}
      />);
    }
  }

  WithActiveItem.propTypes = {
    changeToFavorite: PropTypes.func.isRequired,
    history: PropTypes.any,
    changeOverId: PropTypes.func,
    offer: offerProp
  };

  const mapDispatchToProps = (dispatch) => bindActionCreators({changeToFavorite}, dispatch);
  return connect(undefined, mapDispatchToProps)(withRouter(WithActiveItem));
};

export default withActiveItem;
