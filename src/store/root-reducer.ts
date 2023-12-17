import { NameSpace } from '@/const';
import { combineReducers } from '@reduxjs/toolkit';

import { userProcess } from './slices/user-process/user-process.ts';
import { multipleOffersData } from './slices/multiple-offers-data/multiple-offers-data';
import { singleOfferData } from './slices/single-offer-data/single-offer-data';
import { nearbyData } from './slices/nearby-data/nearby-data';
import { reviewsData } from './slices/reviews-data/reviews-data';
import { favoritesData } from './slices/favorites-data/favorites-data';
import { appProcess } from './slices/app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.MultipleOffersData]: multipleOffersData.reducer,
  [NameSpace.SingleOfferData]: singleOfferData.reducer,
  [NameSpace.FavoritesData]: favoritesData.reducer,
  [NameSpace.NearbyData]: nearbyData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
});
