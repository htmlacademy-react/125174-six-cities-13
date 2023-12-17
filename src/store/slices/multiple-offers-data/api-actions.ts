import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferPreview } from '@/types';
import { APIRoute, NameSpace } from '@/const';

import { AsyncThunkConfig } from '../../types';

export const fetchOffersAction = createAsyncThunk<OfferPreview[], undefined, AsyncThunkConfig>(
  `${NameSpace.MultipleOffersData}/fetchOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(APIRoute.Offers);
    return data;
  },
);
