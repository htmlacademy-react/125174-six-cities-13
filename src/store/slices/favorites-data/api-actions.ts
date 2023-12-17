import { createAsyncThunk } from '@reduxjs/toolkit';
import { FavoriteData, FavoriteItem, OfferPreview } from '@/types';
import { APIRoute, NameSpace } from '@/const';

import { AsyncThunkConfig } from '../../types';
import { updateMultipleOffers } from '../multiple-offers-data/multiple-offers-data';
import { updateSingleOffer } from '../single-offer-data/single-offer-data';
import { updateMultipleFavorites } from '../favorites-data/favorites-data';
import { updateMultipleNearby } from '../nearby-data/nearby-data';

export const fetchFavoritesAction = createAsyncThunk<FavoriteItem[], undefined, AsyncThunkConfig>(
  `${NameSpace.FavoritesData}/fetchFavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FavoriteItem[]>(APIRoute.Favorite);
    return data;
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<
  OfferPreview,
  FavoriteData,
  AsyncThunkConfig
>(
  `${NameSpace.FavoritesData}/changeFavoriteStatus`,
  async ({ status, offerId }, { rejectWithValue, extra: api, dispatch }) => {
    try {
      const { data } = await api.post<OfferPreview>(`${APIRoute.Favorite}/${offerId}/${status}`);

      dispatch(updateMultipleOffers(data));
      dispatch(updateSingleOffer(data));
      dispatch(updateMultipleFavorites(data));
      dispatch(updateMultipleNearby(data));

      return data;
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  },
);
