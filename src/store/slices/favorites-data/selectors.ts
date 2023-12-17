import { NameSpace } from '@/const';
import { OfferPreview } from '@/types';

import { State } from '../../types';

export const getFavorites = (state: State): OfferPreview[] =>
  state[NameSpace.FavoritesData].favorites;

export const getFavoriteCount = (state: State): number =>
  state[NameSpace.FavoritesData].favorites.length;

export const getIsFavoritesLoading = (state: State): boolean =>
  state[NameSpace.FavoritesData].isFavoritesLoading;

export const getIsFavoriteStatusSubmitting = (state: State): boolean =>
  state[NameSpace.FavoritesData].isFavoriteStatusSubmitting;
