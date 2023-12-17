import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferFull } from '@/types';
import { APIRoute, AppRoute, NameSpace } from '@/const';

import { AsyncThunkConfig } from '../../types';
import { redirectToRoute } from '../../action';

export const fetchOfferAction = createAsyncThunk<OfferFull | null, string, AsyncThunkConfig>(
  `${NameSpace.SingleOfferData}/fetchOffer`,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<OfferFull>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute(AppRoute.PageNotFound));
      return null;
    }
  },
);
