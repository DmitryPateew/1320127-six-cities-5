import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {filterByActiveCity} from "../../mainLogic";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
    this.markers = [];
  }

  _installMap() {
    const {offers, activeCity, mouseOverId} = this.props;
    let icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    filterByActiveCity(offers, activeCity).map((offer) => {
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
      this.markers.push(
          leaflet
          .marker(offer.coords, {icon}).addTo(this.map));
    });
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const zoom = 12;
    this.map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });
    this.map.setView(city, zoom);
    this._installMap();
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this._installMap();
  }

  componentDidUpdate() {
    this.markers.map((marker) => this.map.removeLayer(marker));
    this._installMap();
  }


  render() {
    return (
      <div id="map" ref={this.mapRef} style={{width: `100%`, height: `100%`}}/>
    );
  }

}

Map.propTypes = {
  mouseOverId: PropTypes.number,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default Map;
