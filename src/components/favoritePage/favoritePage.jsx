import React, {PureComponent} from "react";
import FavoriteList from "../favoriteList/favoriteList";
import PropTypes from "prop-types";
import {TYPE_OF_HOUSING} from "../../constant";
import Header from "../header/header";
import FavoriteEmpty from "../favotiteEmpty/favoriteEmpty";
import {connect} from "react-redux";
import {fetchFavoriteList} from "../../store/apiActions";
import {separateByCitys} from "../../mainLogic";

class FavoritePage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFavorite();
  }

  render() {
    const {favorites} = this.props;
    return (
      <div className="page">
        <Header/>
        {!favorites.length ? <FavoriteEmpty/> :
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.entries(separateByCitys(favorites)).map(([city, offers]) => {
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {offers.length ?
                            <FavoriteList offers={offers}/> : ``
                          }
                        </div>
                      </li>);
                  })}
                </ul>
              </section>
            </div>
          </main>}
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({FAVORITE}) => ({
  favorites: FAVORITE.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorite() {
    dispatch(fetchFavoriteList());
  },
});

FavoritePage.propTypes = {
  loadFavorite: PropTypes.func,
  favorites: PropTypes.arrayOf(
      PropTypes.shape({
        favorite: PropTypes.bool.isRequired,
        photos: PropTypes.array.isRequired,
        premium: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        typeOfHousing: PropTypes.oneOf([TYPE_OF_HOUSING.APARTMENT, TYPE_OF_HOUSING.HOTEL, TYPE_OF_HOUSING.HOUSE, TYPE_OF_HOUSING.ROOM]).isRequired,
        countBedrooms: PropTypes.number.isRequired,
        maxAdults: PropTypes.number.isRequired,
        pricePerNight: PropTypes.number.isRequired,
        facilities: PropTypes.array.isRequired,
        ownerInformation: PropTypes.shape({
          photo: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          super: PropTypes.bool.isRequired,
        }),
        description: PropTypes.string.isRequired,
        reviews: PropTypes.array,
      }
      ))
};
export {FavoritePage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);
