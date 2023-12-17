import { OfferPreview } from '@/types';
import { NameSpace } from '@/const';

import { State } from '../../types';

export const getOffers = (state: State): OfferPreview[] =>
  state[NameSpace.MultipleOffersData].offers;

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.MultipleOffersData].isOffersLoading;
