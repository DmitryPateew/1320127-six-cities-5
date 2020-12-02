import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {filterByActiveCity} from "../../main-logic";
import {connect} from "react-redux";
import {TypeOfComponent} from "../../constant";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
    this.markers = [];
    this.city = [52.38333, 4.9];
    this.zoom = 12;
    this.offers = [];
  }

  _changeTypeOfStore(type) {
    if (type === TypeOfComponent.OFFER) {
      this.offers = this.props.nearby;
    } else {
      this.offers = this.props.offers;
    }
  }

  _installMap() {
    const {activeCity, mouseOverId, type, coords} = this.props;
    this._changeTypeOfStore(type);
    let icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    if (coords) {
      icon = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [30, 30]
      });
      this.markers.push(leaflet
        .marker(coords, {icon}).addTo(this.map));
    }

    filterByActiveCity(this.offers, activeCity).map((offer) => {

      if (mouseOverId === offer.id) {
        icon = leaflet.icon({
          iconUrl: `img/pin-active.svg`,
          iconSize: [30, 30]
        });

      } else {
        icon = leaflet.icon({
          iconUrl: `img/pin.svg`,
          iconSize: [30, 30]
        });

      }
      this.markers.push(leaflet
        .marker(offer.coords, {icon}).addTo(this.map));
    });
  }


  componentDidMount() {
    this.city = [filterByActiveCity(this.props.offers, this.props.activeCity)[0].cityLocation.latitude, filterByActiveCity(this.props.offers, this.props.activeCity)[0].cityLocation.longitude];
    const zoom = this.zoom;
    this.map = leaflet.map(this.mapRef.current, {
      center: this.city,
      zoom,
      zoomControl: false,
      marker: true,
    });
    this.map.setView(this.city, zoom);
    this._installMap();
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this._installMap();
  }

  componentDidUpdate() {
    this.zoom = filterByActiveCity(this.props.offers, this.props.activeCity)[0].cityLocation.zoom;
    this.city = [filterByActiveCity(this.props.offers, this.props.activeCity)[0].cityLocation.latitude, filterByActiveCity(this.props.offers, this.props.activeCity)[0].cityLocation.longitude];
    this.map.setView(this.city, this.zoom);
    this.markers.map((marker) => this.map.removeLayer(marker));
    this._installMap();
  }


  render() {
    return (
      <div id="map" ref={this.mapRef} style={{width: `100%`, height: `100%`}}/>
    );
  }

}

const mapStateToProps = ({ACTIVE, DATA, NEARBY}) => ({
  activeCity: ACTIVE.activeCity,
  mouseOverId: ACTIVE.mouseOverId,
  nearby: NEARBY.nearby,
  offers: DATA.offers,
});

Map.propTypes = {
  mouseOverId: PropTypes.number,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  nearby: PropTypes.array.isRequired,
  coords: PropTypes.array,
  type: PropTypes.string,
};

export default connect(mapStateToProps)(Map);
