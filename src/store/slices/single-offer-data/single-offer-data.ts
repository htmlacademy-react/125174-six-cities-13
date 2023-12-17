import { OfferFull, OfferPreview } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOfferAction } from './api-actions';
import { NameSpace } from '@/const';

const updateFavorite = (state: SingleOfferData, id: string) => {
  if (state.offer && state.offer.id === id) {
    state.offer.isFavorite = !state.offer.isFavorite;
  }
};

type SingleOfferData = {
  offer: OfferFull | null;
  isOfferLoading: boolean;
  hasError: boolean;
};

const initialSingleOfferData: SingleOfferData = {
  offer: null,
  isOfferLoading: false,
  hasError: false,
};

export const singleOfferData = createSlice({
  name: NameSpace.SingleOfferData,
  initialState: initialSingleOfferData,
  reducers: {
    updateSingleOffer: (state, action: PayloadAction<OfferPreview>) => {
      updateFavorite(state, action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.hasError = false;
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.hasError = true;
        state.isOfferLoading = false;
      });
  },
});

export const { updateSingleOffer } = singleOfferData.actions;
