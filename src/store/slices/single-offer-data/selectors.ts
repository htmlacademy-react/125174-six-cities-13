import { OfferFull } from '@/types';
import { NameSpace } from '@/const';

import { State } from '../../types';

export const getOffer = (state: State): OfferFull | null => state[NameSpace.SingleOfferData].offer;

export const getIsOfferLoading = (state: State): boolean =>
  state[NameSpace.SingleOfferData].isOfferLoading;
