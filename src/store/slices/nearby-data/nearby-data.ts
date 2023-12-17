import { OfferPreview } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '@/const';

import { fetchNearbyAction } from './api-actions';
import { updateFavorites } from './utils';

type NearbyData = {
  nearby: OfferPreview[];
  isNearbyLoading: boolean;
  hasError: boolean;
};

const initialNearbyData: NearbyData = {
  nearby: [],
  isNearbyLoading: false,
  hasError: false,
};

export const nearbyData = createSlice({
  name: NameSpace.NearbyData,
  initialState: initialNearbyData,
  reducers: {
    updateMultipleNearby: (state, action: PayloadAction<OfferPreview>) => {
      updateFavorites(state.nearby, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyAction.pending, (state) => {
        state.hasError = false;
        state.isNearbyLoading = true;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.hasError = false;
        state.nearby = action.payload;
        state.isNearbyLoading = false;
      })
      .addCase(fetchNearbyAction.rejected, (state) => {
        state.hasError = true;
        state.isNearbyLoading = false;
      });
  },
});

export const { updateMultipleNearby } = nearbyData.actions;
