import { getHasError, getIsOffersLoading, store, useAppSelector } from '@/store';
import { checkAuthAction } from '@/store/slices/user-process/api-actions';
import { fetchOffersAction } from '@/store/slices/multiple-offers-data/api-actions';
import LoadingScreen from '@/components/loading-screen/loading-screen';
import ErrorScreen from '@/components/error-screen/error-screen';
import AppRoutes from '@/components/app-routes/app-routes';

import { useFetchFavorites } from './hooks';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);
  const hasError = useAppSelector(getHasError);

  useFetchFavorites();

  if (isOffersDataLoading) {
    return <LoadingScreen />;
  }

  if (hasError) {
    return <ErrorScreen />;
  }

  return <AppRoutes />;
}

export default App;
