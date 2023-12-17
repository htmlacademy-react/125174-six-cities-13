import { NameSpace, Status } from '@/const';
import { Review } from '@/types';

import { State } from '../../types';

export const getReviews = (state: State): Review[] => state[NameSpace.ReviewsData].reviews;

export const getIsReviewsLoading = (state: State): boolean =>
  state[NameSpace.ReviewsData].isReviewsLoading;

export const getIsReviewsStatusSubmitting = (state: State): boolean =>
  state[NameSpace.ReviewsData].isReviewsStatusSubmitting;

export const getReviewsHasError = (state: State): Status =>
  state[NameSpace.ReviewsData].reviewsStatus;

export const getHasError = (state: State): boolean => state[NameSpace.ReviewsData].hasError;
