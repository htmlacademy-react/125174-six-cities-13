import { OfferPreview } from '@/types';

export const updateOffers = (offers: OfferPreview[], updatedOffer: OfferPreview) => {
  const offerIndex = offers.findIndex((el) => el.id === updatedOffer.id);
  if (offerIndex !== -1) {
    offers[offerIndex] = updatedOffer;
  }
};
