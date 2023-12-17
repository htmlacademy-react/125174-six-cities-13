import { OfferPreview } from '@/types';

export const getShuffledNearby = (nearby: readonly OfferPreview[]): OfferPreview[] =>
  [...nearby].sort(() => Math.random() - 0.5);
