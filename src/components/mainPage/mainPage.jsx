import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferList from "../offerList/offerList";
import Map from "../map/map";
import CityList from "../cityList/cityList";
import Header from "../header/header";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import SortList from "../sortList/sortList";
import {filterByActiveCity} from "../../mainLogic";
import MainEmpty from "../mainEmpty/mainEmpty";

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeFilterList = this.handleChangeFilterList.bind(this);
  }

  handleChangeFilterList(evt) {
    evt.preventDefault();
    const {toggle} = this.props;
    // eslint-disable-next-line no-unused-expressions
    toggle ? this.props.changeToggleFilter(false) : this.props.changeToggleFilter(true);
  }

  render() {
    const {offers, activeCity, changeCity, activeFilter, changeFilter, changeOverId} = this.props;
    const isEmpty = !offers.length;

    return (
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CityList activeCity={activeCity} changeCity={changeCity}/>
          <div className="cities">
            {isEmpty ? <MainEmpty currentCity={activeCity}/> : <React.Fragment>
              <div className="cities__places-container container">
                <section className="cities__places places">

                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found"> {filterByActiveCity(offers, activeCity).length} places to stay
                    in {activeCity}</b>
                  <form onClick={this.handleChangeFilterList} className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex="0">{activeFilter}
                      <svg className="places__sorting-arrow" width="7" height="4">
                      </svg>
                    </span>
                    <SortList changeFilter={changeFilter} toggle={this.props.toggle} activeFilter={activeFilter}/>
                  </form>
                  <OfferList changeOverId={changeOverId} activeFilter={activeFilter} activeCity={activeCity}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map/>
                  </section>
                </div>
              </div>
            </React.Fragment>}
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  mouseOverId: PropTypes.number,
  changeOverId: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string,
  toggle: PropTypes.bool.isRequired,
  changeToggleFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, ACTIVE}) => ({
  activeCity: ACTIVE.activeCity,
  activeFilter: ACTIVE.activeFilter,
  offers: DATA.offers,
  mouseOverId: ACTIVE.mouseOverId,
  toggle: ACTIVE.toggle,
});


const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  changeFilter(activeFilter) {
    dispatch(ActionCreator.changeFilter(activeFilter));
  },
  changeOverId(overId) {
    dispatch(ActionCreator.changeOverId(overId));
  },
  changeToggleFilter(toggle) {
    dispatch(ActionCreator.changeToggleFilter(toggle));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
