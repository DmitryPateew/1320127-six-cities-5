export const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        id: offer.id,
        prewiewImage: offer.preview_image,
        city: offer.city.name,
        facilities: offer.goods,
        photos: offer.images,
        coords: [offer.location.latitude, offer.location.longitude],
        description: offer.description,
        rating: offer.rating,
        countBedrooms: offer.bedrooms,
        maxAdults: offer.max_adults,
        pricePerNight: offer.price,
        title: offer.title,
        premium: offer.is_premium,
        favorite: offer.is_favorite,
        typeOfHousing: offer.type,
        ownerInformation: {
          photo: offer.host.avatar_url,
          name: offer.host.name,
          super: offer.host.is_pro,
          id: offer.host.id,
        },
        cityLocation: {
          latitude: offer.location.latitude,
          longitude: offer.location.longitude,
        },
        reviews: [],
      }
  );
  delete adaptedOffer.is_favorite;
  return adaptedOffer;
};
