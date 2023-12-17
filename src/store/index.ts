export { store } from './store';

export { useAppSelector, useAppDispatch } from './hooks';

export { getIsOfferLoading, getOffer } from './slices/single-offer-data/selectors';

export {
  getIsReviewsLoading,
  getReviews,
  getHasError,
  getIsReviewsStatusSubmitting,
  getReviewsHasError,
} from './slices/reviews-data/selectors';

export { setReviewsErrorStatus } from './slices/reviews-data/reviews-data';

export { getIsNearbyLoading, getNearby } from './slices/nearby-data/selectors';

export { getOffers, getIsOffersLoading } from './slices/multiple-offers-data/selectors';

export {
  getAuthCheckedStatus,
  getAuthorizationStatus,
  getIsSubmittingLogin,
  getUserInfo,
} from './slices/user-process/selectors';

export { favoritesData, updateMultipleFavorites } from './slices/favorites-data/favorites-data';

export {
  getIsFavoritesLoading,
  getFavoriteCount,
  getFavorites,
  getIsFavoriteStatusSubmitting,
} from './slices/favorites-data/selectors';

export {
  fetchFavoritesAction,
  changeFavoriteStatusAction,
} from './slices/favorites-data/api-actions';

export { changeSortingType, changeCity, appProcess } from './slices/app-process/app-process';

export { fetchOffersAction } from './slices/multiple-offers-data/api-actions';

export { getSelectedCity, getSelectedSortType } from './slices/app-process/selectors';

export { checkAuthAction, loginAction, logoutAction } from './slices/user-process/api-actions';
