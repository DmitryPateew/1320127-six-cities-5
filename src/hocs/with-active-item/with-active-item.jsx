import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';
import {offerProp} from "../../prop-types";
import {changeToFavorite} from "../../store/api-actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {switchToggle} from "../../main-logic";
import {AuthorizationStatus} from "../../constant";

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
      if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
        this.props.changeToFavorite(this.props.offer.id, switchToggle(this.props.offer.favorite));
      } else {
        this.props.history.push(`/login`);
      }
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

  const mapStateToProps = (state) => ({
    authorizationStatus: state.USER.authorizationStatus,
  });

  WithActiveItem.propTypes = {
    changeToFavorite: PropTypes.func.isRequired,
    history: PropTypes.any,
    changeOverId: PropTypes.func,
    offer: offerProp,
    authorizationStatus: PropTypes.string
  };

  const mapDispatchToProps = (dispatch) => bindActionCreators({changeToFavorite}, dispatch);
  return connect(mapStateToProps, mapDispatchToProps)(withRouter(WithActiveItem));
};

export default withActiveItem;
