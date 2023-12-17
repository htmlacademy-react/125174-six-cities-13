import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '@/const';

type PrivateRouteProps = {
  children: JSX.Element;
  userAuthorizationStatus: AuthorizationStatus;
};

function PrivateRoute({ children, userAuthorizationStatus }: PrivateRouteProps): JSX.Element {
  return userAuthorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
