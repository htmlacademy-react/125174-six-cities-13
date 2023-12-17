import { OfferPreview } from '@/types';

export const updateFavorites = (favorites: OfferPreview[], updatedOffer: OfferPreview) => {
  const favoriteOfferIndex = favorites.findIndex((el) => el.id === updatedOffer.id);

  if (updatedOffer.isFavorite && favoriteOfferIndex === -1) {
    favorites.push(updatedOffer);
  } else if (!updatedOffer.isFavorite && favoriteOfferIndex !== -1) {
    favorites.splice(favoriteOfferIndex, 1);
  }
};
