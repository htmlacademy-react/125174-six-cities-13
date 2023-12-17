import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferPreview } from '@/types';
import { APIRoute, NameSpace } from '@/const';

import { AsyncThunkConfig } from '../../types';

export const fetchNearbyAction = createAsyncThunk<OfferPreview[], string, AsyncThunkConfig>(
  `${NameSpace.NearbyData}/fetchNearby`,
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferPreview[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    return data;
  },
);
