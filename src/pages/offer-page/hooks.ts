import { useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { useAppOutletContext } from '@/components/layout/hooks';
import { OfferFull } from '@/types';
import { fetchOfferAction } from '@/store/slices/single-offer-data/api-actions';
import { fetchReviewsAction } from '@/store/slices/reviews-data/api-actions';
import { fetchNearbyAction } from '@/store/slices/nearby-data/api-actions';

export function useOfferData(id: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchReviewsAction(id));
    dispatch(fetchNearbyAction(id));
  }, [dispatch, id]);
}

export function usePageInfo(offer: OfferFull | null) {
  const { setPageInfo } = useAppOutletContext();

  useEffect(() => {
    setPageInfo({ title: offer?.title || '', description: offer?.description || '' });
  }, [offer?.description, offer?.title, setPageInfo]);
}
