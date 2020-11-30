import moment from "moment";
import {TIME__FORMAT} from "./constant";
import {adaptToClient} from "./adapter";

export const filterByActiveCity = (offers, activeCity) => {
  return offers.filter((offer) => offer.city === activeCity);
};

export const sortByActiveFilter = (offers, activeFilter) => {
  switch (activeFilter) {
    case `Popular`:
      return offers;
    case `Price: low to high`:
      return offers.sort((a, b) => a.pricePerNight - b.pricePerNight);
    case `Price: high to low`:
      return offers.sort((a, b) => b.pricePerNight - a.pricePerNight);
    case `Top rated first`:
      return offers.sort((a, b) => b.rating - a.rating);
  }

  return offers;
};

const rouleOfRounding = (rating) => {
  return Math.round(rating);
};

export const starWith = (rating) => {
  return rouleOfRounding(rating) * 2 * 10;
};

export const sortRevievsFromFresh = (revivs) => {
  return revivs.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};

export const formatCommentDate = (date) => {
  Date.parse(date);
  return moment(date).format(TIME__FORMAT.COMMENT);
};


export const replaseOffers = (offers, otherOffer) => {
  return offers.map(function (item) {
    return item.id === otherOffer.id ? adaptToClient(otherOffer) : item;
  });
};

export const switchToggle = (value) => {
  return value ? 0 : 1;
};

export const separateByCitys = (favorites) => {
  const offers = {};
  favorites.forEach((offer) => {
    if (!offers[offer.city]) {
      offers[offer.city] = [];
    }
    offers[offer.city].push(offer);
  });
  return offers;
};

export const ratingAndCommentValidation = (rating, comment) => {
  if (rating && comment.length > 50 && comment.length < 300) {
    return false;
  } else {
    return true;
  }
};
