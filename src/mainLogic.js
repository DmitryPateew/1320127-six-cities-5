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
      return offers.sort((a, b) =>b.rating - a.rating);
  }

  return offers;
};
