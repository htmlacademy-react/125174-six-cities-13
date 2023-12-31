import cn from 'classnames';
import Header from '../../components/header/header.tsx';
import { useAppSelector } from '../../store/hooks.ts';
import LoadingPage from '../loading-page/loading-page.tsx';
import EmptyFavorites from '../../components/empty-favorites/empty-favorites.tsx';
import NonEmptyFavorites from '../../components/non-empty-favorites/non-empty-favorites.tsx';
import { AppRoute } from '../../const.ts';
import { Link } from 'react-router-dom';
import { getFavorites, getIsFavoritesLoading } from '../../store/slices/app-data/selectors.ts';

function FavoritesPage(): JSX.Element {

  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const favorites = useAppSelector(getFavorites);
  const isEmptyFavorites = favorites.length === 0;

  if (isFavoritesLoading) {
    return <LoadingPage />;
  }

  return (
    <div className={cn('page', { 'page--favorites-empty': isEmptyFavorites })}>
      <Header />
      <main className={cn('page__main page__main--favorites', { 'page__main--favorites-empty': isEmptyFavorites })}>
        <div className="page__favorites-container container">
          {isEmptyFavorites ? <EmptyFavorites /> : <NonEmptyFavorites favorites={favorites} />}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
