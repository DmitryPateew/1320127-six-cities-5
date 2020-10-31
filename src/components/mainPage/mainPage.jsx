import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferList from "../offerList/offerList";
import Map from "../map/map";
import CityList from "../cityList/cityList";
import Header from "../header/header";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import SortList from "../sortList/sortList";

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {quantityOffer, offers, activeCity, changeCity, activeFilter, changeFilter} = this.props;

    return (
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CityList activeCity={activeCity} changeCity={changeCity}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found"> {quantityOffer} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                    </svg>
                  </span>
                  <SortList changeFilter={changeFilter} activeFilter={activeFilter}/>
                </form>
                <OfferList offers={offers} activeFilter={activeFilter} activeCity={activeCity}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} activeCity={activeCity}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  quantityOffer: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeFilter: state.activeFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(ActionCreator.changeCity(city));
  },
  changeFilter: (activeFilter)=>{
    dispatch(ActionCreator.changeFilter(activeFilter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
