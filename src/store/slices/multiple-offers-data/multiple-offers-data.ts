import { OfferPreview } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '@/const';

import { fetchOffersAction } from './api-actions';
import { updateOffers } from './utils';

const initialMultipleOffersData: MultipleOffersData = {
  offers: [],
  isOffersLoading: false,
  hasError: false,
};

type MultipleOffersData = {
  offers: OfferPreview[];
  isOffersLoading: boolean;
  hasError: boolean;
};

export const multipleOffersData = createSlice({
  name: NameSpace.MultipleOffersData,
  initialState: initialMultipleOffersData,
  reducers: {
    updateMultipleOffers: (state, action: PayloadAction<OfferPreview>) => {
      updateOffers(state.offers, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.hasError = false;
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.hasError = true;
        state.isOffersLoading = false;
      });
  },
});

export const { updateMultipleOffers } = multipleOffersData.actions;
