import { OfferPreview } from '@/types';
import { NameSpace } from '@/const';

import { State } from '../../types';

export const getNearby = (state: State): OfferPreview[] => state[NameSpace.NearbyData].nearby;

export const getIsNearbyLoading = (state: State): boolean =>
  state[NameSpace.NearbyData].isNearbyLoading;
