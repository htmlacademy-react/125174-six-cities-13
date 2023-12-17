import { useMemo } from 'react';
import cn from 'classnames';
import LocationsTabs from '@/components/locations-tabs/locations-tabs.tsx';
import Cities from '@/components/cities/cities';
import { getOffers, getSelectedCity, useAppSelector } from '@/store';

function MainPage(): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const offers = useAppSelector(getOffers);
  const offersByCity = useMemo(
    () => offers.filter((offer) => offer.city.name === selectedCity),
    [offers, selectedCity],
  );

  return (
    <main
      className={cn('page__main page__main--index', {
        'page__main--index-empty': offersByCity.length === 0,
      })}
    >
      <h1 className="visually-hidden">Cities</h1>
      <LocationsTabs selectedCity={selectedCity} />
      <Cities offers={offersByCity} />
    </main>
  );
}

export default MainPage;
