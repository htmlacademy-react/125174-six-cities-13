export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum SortingType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  PageNotFound = '/*',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Review = '/comments',
  Nearby = '/nearby',
  Favorite = '/favorite',
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  MultipleOffersData = 'MULTIPLE_OFFERS_DATA',
  SingleOfferData = 'SINGLE_OFFER_DATA',
  FavoritesData = 'FAVORITES_DATA',
  NearbyData = 'NEARBY_DATA',
  ReviewsData = 'REVIEWS_DATA',
}

export enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export enum TitlePage {
  Main = 'Home',
  Favorites = 'Favorites',
  Login = 'Login',
}

export enum DescriptionPage {
  Main = 'Description main',
  Favorites = 'Description favorites',
  Login = 'Description login',
}
