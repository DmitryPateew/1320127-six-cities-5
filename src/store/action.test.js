import {
  ActionType,
  ActionCreator,
  loadCitys,
  loadFavorite,
  loadComments,
  loadNearby,
  redirectToRoute,
  saveUser,
  changeFavorite,
  reviewAdd,
} from "./action";


describe(`Action creators work correctly`, () => {
  it(`Action creator for changeCity`, () => {
    expect(ActionCreator.changeCity(`NeyYork`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `NeyYork`,
    });
  });

  it(`Action creator for CHANGE__FILTER`, () => {
    expect(ActionCreator.changeFilter(`To low`)).toEqual({
      type: ActionType.CHANGE_FILTER,
      payload: `To low`,
    });
  });

  it(`Action creator for changeOverId`, () => {
    expect(ActionCreator.changeOverId(null)).toEqual({
      type: ActionType.CHANGE_OVER_ID,
      payload: null,
    });
  });

  it(`Action creator for requireAuthorization`, () => {
    expect(ActionCreator.requireAuthorization(`AUTH`, `ilja21@mail.ru`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
      payload2: `ilja21@mail.ru`,
    });
  });

  it(`Action creator for loadCitys`, () => {
    expect(loadCitys([
      {
        id: 1,
        city: `Hamburg`,
        coords: [52.3909553943508, 4.85309666406198],
        favorite: true,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: false,
        typeOfHousing: `room`,
        rating: 1,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 150,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `img/avatar-angelina.jpg`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `ffdlkmv;lfdmv;ldfm;vlmdf;`
          },
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 2,
        city: `Amsterdam`,
        coords: [52.369553943508, 4.85309666406198],
        favorite: false,
        photos: [`img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `apartment`,
        rating: 2,
        countBedrooms: 2,
        maxAdults: 3,
        pricePerNight: 100,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 3,
        city: `Amsterdam`,
        coords: [52.3909553943508, 4.929309666408198],
        favorite: true,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 4,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 400,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 4,
        city: `Amsterdam`,
        coords: [52.3809553943508, 4.939309666406198],
        favorite: false,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 3,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 120,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 5,
        city: `Amsterdam`,
        coords: [52.3809553943508, 4.950307666706178],
        favorite: false,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 2,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 200,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      }
    ])).toEqual({
      type: ActionType.LOAD_CITYS,
      payload: [
        {
          id: 1,
          city: `Hamburg`,
          coords: [52.3909553943508, 4.85309666406198],
          favorite: true,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: false,
          typeOfHousing: `room`,
          rating: 1,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 150,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `img/avatar-angelina.jpg`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `ffdlkmv;lfdmv;ldfm;vlmdf;`
            },
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 2,
          city: `Amsterdam`,
          coords: [52.369553943508, 4.85309666406198],
          favorite: false,
          photos: [`img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `apartment`,
          rating: 2,
          countBedrooms: 2,
          maxAdults: 3,
          pricePerNight: 100,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 3,
          city: `Amsterdam`,
          coords: [52.3909553943508, 4.929309666408198],
          favorite: true,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 4,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 400,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 4,
          city: `Amsterdam`,
          coords: [52.3809553943508, 4.939309666406198],
          favorite: false,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 3,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 120,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 5,
          city: `Amsterdam`,
          coords: [52.3809553943508, 4.950307666706178],
          favorite: false,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 2,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 200,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        }
      ],
    });
  });

  it(`Action creator for redirectToRoute`, () => {
    expect(redirectToRoute(`/login`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/login`,
    });
  });

  it(`Action creator for saveUser`, () => {
    expect(saveUser({
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`,
    })).toEqual({
      type: ActionType.SAVE_USER,
      payload: {
        avatarUrl: `img/1.png`,
        id: 4,
        isPro: false,
        name: `Max`,
      },
    });
  });


  it(`Action creator for loadComments`, () => {
    expect(loadComments([
      {
        comment: `A quiet cozy and dlfkmvlksfdmof Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 10,
        rating: 4,
        user: {
          avatarUrl: `img/1.png`,
          id: 40,
          isPro: false, name: `Max`
        }
      },
      {
        comment: `A quiet cozy and picturesque that hides behine lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 1,
        rating: 7,
        user: {
          avatarUrl: `img/1.png`,
          id: 4,
          isPro: false, name: `Max`
        }},
      {
        comment: `A quiet cozy and picturesque that river by the unique lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 4,
        rating: 1,
        user: {
          avatarUrl: `img/1.png`,
          id: 9,
          isPro: false, name: `Max`
        }}]
    )).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: [
        {
          comment: `A quiet cozy and dlfkmvlksfdmof Amsterdam.`,
          date: `2019-05-08T14:13:56.569Z`,
          id: 10,
          rating: 4,
          user: {
            avatarUrl: `img/1.png`,
            id: 40,
            isPro: false, name: `Max`
          }
        },
        {
          comment: `A quiet cozy and picturesque that hides behine lightness of Amsterdam.`,
          date: `2019-05-08T14:13:56.569Z`,
          id: 1,
          rating: 7,
          user: {
            avatarUrl: `img/1.png`,
            id: 4,
            isPro: false, name: `Max`
          }},
        {
          comment: `A quiet cozy and picturesque that river by the unique lightness of Amsterdam.`,
          date: `2019-05-08T14:13:56.569Z`,
          id: 4,
          rating: 1,
          user: {
            avatarUrl: `img/1.png`,
            id: 9,
            isPro: false, name: `Max`
          }}],
    });
  });

  it(`Action creator for loadNearby`, () => {
    expect(loadNearby([
      {
        id: 1,
        city: `Hamburg`,
        coords: [52.3909553943508, 4.85309666406198],
        favorite: true,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: false,
        typeOfHousing: `room`,
        rating: 1,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 150,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `img/avatar-angelina.jpg`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `ffdlkmv;lfdmv;ldfm;vlmdf;`
          },
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 2,
        city: `Amsterdam`,
        coords: [52.369553943508, 4.85309666406198],
        favorite: false,
        photos: [`img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `apartment`,
        rating: 2,
        countBedrooms: 2,
        maxAdults: 3,
        pricePerNight: 100,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 3,
        city: `Amsterdam`,
        coords: [52.3909553943508, 4.929309666408198],
        favorite: true,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 4,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 400,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 4,
        city: `Amsterdam`,
        coords: [52.3809553943508, 4.939309666406198],
        favorite: false,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 3,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 120,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 5,
        city: `Amsterdam`,
        coords: [52.3809553943508, 4.950307666706178],
        favorite: false,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 2,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 200,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      }
    ])).toEqual({
      type: ActionType.LOAD_NEARBY,
      payload: [
        {
          id: 1,
          city: `Hamburg`,
          coords: [52.3909553943508, 4.85309666406198],
          favorite: true,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: false,
          typeOfHousing: `room`,
          rating: 1,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 150,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `img/avatar-angelina.jpg`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `ffdlkmv;lfdmv;ldfm;vlmdf;`
            },
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 2,
          city: `Amsterdam`,
          coords: [52.369553943508, 4.85309666406198],
          favorite: false,
          photos: [`img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `apartment`,
          rating: 2,
          countBedrooms: 2,
          maxAdults: 3,
          pricePerNight: 100,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 3,
          city: `Amsterdam`,
          coords: [52.3909553943508, 4.929309666408198],
          favorite: true,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 4,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 400,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 4,
          city: `Amsterdam`,
          coords: [52.3809553943508, 4.939309666406198],
          favorite: false,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 3,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 120,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 5,
          city: `Amsterdam`,
          coords: [52.3809553943508, 4.950307666706178],
          favorite: false,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 2,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 200,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        }
      ],
    });
  });

  it(`Action creator for loadFavorite`, () => {
    expect(loadFavorite([
      {
        id: 1,
        city: `Hamburg`,
        coords: [52.3909553943508, 4.85309666406198],
        favorite: true,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: false,
        typeOfHousing: `room`,
        rating: 1,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 150,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `img/avatar-angelina.jpg`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `ffdlkmv;lfdmv;ldfm;vlmdf;`
          },
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 2,
        city: `Amsterdam`,
        coords: [52.369553943508, 4.85309666406198],
        favorite: false,
        photos: [`img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `apartment`,
        rating: 2,
        countBedrooms: 2,
        maxAdults: 3,
        pricePerNight: 100,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 3,
        city: `Amsterdam`,
        coords: [52.3909553943508, 4.929309666408198],
        favorite: true,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 4,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 400,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 4,
        city: `Amsterdam`,
        coords: [52.3809553943508, 4.939309666406198],
        favorite: false,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 3,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 120,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
      {
        id: 5,
        city: `Amsterdam`,
        coords: [52.3809553943508, 4.950307666706178],
        favorite: false,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: true,
        typeOfHousing: `room`,
        rating: 2,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 200,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `12`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `Wadim`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      }
    ])).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: [
        {
          id: 1,
          city: `Hamburg`,
          coords: [52.3909553943508, 4.85309666406198],
          favorite: true,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: false,
          typeOfHousing: `room`,
          rating: 1,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 150,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `img/avatar-angelina.jpg`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `ffdlkmv;lfdmv;ldfm;vlmdf;`
            },
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `img/avatar-max.jpg`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 2,
          city: `Amsterdam`,
          coords: [52.369553943508, 4.85309666406198],
          favorite: false,
          photos: [`img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `apartment`,
          rating: 2,
          countBedrooms: 2,
          maxAdults: 3,
          pricePerNight: 100,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 3,
          city: `Amsterdam`,
          coords: [52.3909553943508, 4.929309666408198],
          favorite: true,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 4,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 400,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 4,
          city: `Amsterdam`,
          coords: [52.3809553943508, 4.939309666406198],
          favorite: false,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 3,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 120,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        },
        {
          id: 5,
          city: `Amsterdam`,
          coords: [52.3809553943508, 4.950307666706178],
          favorite: false,
          photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
          title: `Beautiful & luxurious studio at great location`,
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          premium: true,
          typeOfHousing: `room`,
          rating: 2,
          countBedrooms: 3,
          maxAdults: 3,
          pricePerNight: 200,
          facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
          ownerInformation: {
            photo: `12`,
            name: `Wadim`,
            super: true
          },
          reviews: [
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            },
            {
              authorPhoto: `Wadim`,
              name: `Wadim`,
              evulation: 4,
              date: `Wadim`,
              evulationText: `Wadim`
            }
          ]
        }
      ],
    });
  });

  it(`Action creator for changeFavorite`, () => {
    expect(changeFavorite({
      id: 1,
      city: `Hamburg`,
      coords: [52.3909553943508, 4.85309666406198],
      favorite: true,
      photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
      title: `Beautiful & luxurious studio at great location`,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      premium: false,
      typeOfHousing: `room`,
      rating: 1,
      countBedrooms: 3,
      maxAdults: 3,
      pricePerNight: 150,
      facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
      ownerInformation: {
        photo: `img/avatar-angelina.jpg`,
        name: `Wadim`,
        super: true
      },
      reviews: [
        {
          authorPhoto: `img/avatar-max.jpg`,
          name: `Wadim`,
          evulation: 4,
          date: `Wadim`,
          evulationText: `ffdlkmv;lfdmv;ldfm;vlmdf;`
        },
        {
          authorPhoto: `img/avatar-max.jpg`,
          name: `Wadim`,
          evulation: 4,
          date: `Wadim`,
          evulationText: `Wadim`
        },
        {
          authorPhoto: `img/avatar-max.jpg`,
          name: `Wadim`,
          evulation: 4,
          date: `Wadim`,
          evulationText: `Wadim`
        }
      ]
    })).toEqual({
      type: ActionType.CHANGE_FAVORITE,
      payload: {
        id: 1,
        city: `Hamburg`,
        coords: [52.3909553943508, 4.85309666406198],
        favorite: true,
        photos: [`img/apartment-02.jpg`, `img/apartment-01.jpg`],
        title: `Beautiful & luxurious studio at great location`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        premium: false,
        typeOfHousing: `room`,
        rating: 1,
        countBedrooms: 3,
        maxAdults: 3,
        pricePerNight: 150,
        facilities: [`Wi-Fi`, `Heating`, `Kitchen`],
        ownerInformation: {
          photo: `img/avatar-angelina.jpg`,
          name: `Wadim`,
          super: true
        },
        reviews: [
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `ffdlkmv;lfdmv;ldfm;vlmdf;`
          },
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          },
          {
            authorPhoto: `img/avatar-max.jpg`,
            name: `Wadim`,
            evulation: 4,
            date: `Wadim`,
            evulationText: `Wadim`
          }
        ]
      },
    });
  });

  it(`Action creator for reviewAdd`, () => {
    expect(reviewAdd(`good`, 3)).toEqual({
      type: ActionType.REVIEW_ADD,
      comment0: `good`,
      rating0: 3,
    });
  });

});
