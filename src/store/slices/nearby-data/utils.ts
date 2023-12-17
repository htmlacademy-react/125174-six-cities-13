import { OfferPreview } from '@/types';

export const updateFavorites = (nearby: OfferPreview[], updatedOffer: OfferPreview) => {
  const offerNearbyIndex = nearby.findIndex((el) => el.id === updatedOffer.id);
  if (offerNearbyIndex !== -1) {
    nearby[offerNearbyIndex].isFavorite = !nearby[offerNearbyIndex].isFavorite;
  }
};
