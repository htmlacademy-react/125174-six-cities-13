import { useEffect } from 'react';

import {
  useAppDispatch,
  useAppSelector,
  fetchFavoritesAction,
  getAuthCheckedStatus,
} from '@/store';

const useFetchFavorites = () => {
  const dispatch = useAppDispatch();
  const authCheckedStatus = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    if (authCheckedStatus) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, authCheckedStatus]);
};

export { useFetchFavorites };
