import { Status } from '@/const';

import { ReviewsData } from './types';

export const initialReviewsData: ReviewsData = {
  reviews: [],
  isReviewsLoading: false,
  isReviewsStatusSubmitting: false,
  reviewsStatus: Status.Idle,
  hasError: false,
};
