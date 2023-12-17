import { FavoriteItem } from '@/types';

export type FavoritesData = {
  favorites: FavoriteItem[];
  isFavoritesLoading: boolean;
  isFavoriteStatusSubmitting: boolean;
  hasError: boolean;
};
