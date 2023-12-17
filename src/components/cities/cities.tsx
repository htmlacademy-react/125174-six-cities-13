import Map from '../map/map.tsx';
import cn from 'classnames';
import { OfferPreview } from '@/types';
import { useCallback, useState } from 'react';
import PlacesContainer from '@/components/places-container/places-container';

interface CitiesProps {
  offers: OfferPreview[];
}

function Cities({ offers }: CitiesProps) {
  const [selectedOfferId, setSelectedOfferId] = useState<OfferPreview['id']>('');

  const noPlacesAvailable = offers.length === 0;

  const handleCardMouseEnter = useCallback((id: OfferPreview['id']) => setSelectedOfferId(id), []);
  const handleCardMouseLeave = useCallback(() => setSelectedOfferId(''), []);

  return (
    <div className="cities">
      <div
        className={cn('cities__places-container container', {
          'cities__places-container--empty': noPlacesAvailable,
        })}
      >
        <PlacesContainer
          offers={offers}
          handleCardMouseEnter={handleCardMouseEnter}
          handleCardMouseLeave={handleCardMouseLeave}
        />
        <div className="cities__right-section">
          {!noPlacesAvailable && (
            <section className="cities__map map">
              <Map
                centerCoordinates={offers[0].city.location}
                offers={offers}
                selectedOfferId={selectedOfferId}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cities;
