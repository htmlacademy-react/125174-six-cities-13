import { NameSpace, Status } from '@/const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchReviewsAction, postReviewAction } from './api-actions';
import { initialReviewsData } from './const';

export const reviewsData = createSlice({
  name: NameSpace.ReviewsData,
  initialState: initialReviewsData,
  reducers: {
    setReviewsErrorStatus: (state, action: PayloadAction<Status>) => {
      state.reviewsStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.hasError = false;
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasError = true;
        state.isReviewsLoading = false;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.reviewsStatus = Status.Loading;
        state.isReviewsStatusSubmitting = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviewsStatus = Status.Success;
        state.isReviewsStatusSubmitting = false;
        state.reviews.push(action.payload);
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.reviewsStatus = Status.Error;
        state.isReviewsStatusSubmitting = false;
      });
  },
});

export const { setReviewsErrorStatus } = reviewsData.actions;
