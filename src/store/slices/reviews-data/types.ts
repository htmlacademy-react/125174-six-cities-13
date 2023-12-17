import { Review } from '@/types';
import { Status } from '@/const';

export type ReviewsData = {
  reviews: Review[];
  isReviewsLoading: boolean;
  isReviewsStatusSubmitting: boolean;
  reviewsStatus: Status;
  hasError: boolean;
};
