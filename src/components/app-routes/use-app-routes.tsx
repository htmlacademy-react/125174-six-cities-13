import { useAppSelector } from '@/store';
import { getAuthorizationStatus } from '@/store/slices/user-process/selectors';
import { AppRoute } from '@/const';
import Layout from '@/components/layout/layout';
import MainPage from '@/pages/main-page/main-page';
import RedirectToMainRoute from '@/components/redirect-to-main-route/redirect-to-main-route';
import PrivateRouteRoute from '@/components/private-route/private-route';
import FavoritesPage from '@/pages/favorites-page/favorites-page';
import OfferPage from '@/pages/offer-page/offer-page';
import LoginPage from '@/pages/login-page/login-page';
import NotFoundPage from '@/pages/not-found-page/not-found-page';

function useAppRoutes() {
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  const routes = [
    {
      path: AppRoute.Main,
      element: <MainPage />,
      layout: <Layout isHeaderActiveLogo={false} />,
    },
    {
      path: AppRoute.Login,
      element: (
        <RedirectToMainRoute authorizationStatus={userAuthorizationStatus}>
          <LoginPage />
        </RedirectToMainRoute>
      ),
      layout: <Layout isHeaderUserNavigation={false} />,
    },
    {
      path: AppRoute.Favorites,
      element: (
        <PrivateRouteRoute userAuthorizationStatus={userAuthorizationStatus}>
          <FavoritesPage />
        </PrivateRouteRoute>
      ),
      layout: <Layout isFooterShow />,
    },
    {
      path: AppRoute.Offer,
      element: <OfferPage />,
      layout: <Layout isFooterShow />,
    },
    {
      path: AppRoute.PageNotFound,
      element: (
        <Layout isFooterShow>
          <NotFoundPage />
        </Layout>
      ),
    },
  ];

  return { routes };
}

export default useAppRoutes;
