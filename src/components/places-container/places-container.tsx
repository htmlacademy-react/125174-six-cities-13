import React from 'react';
import { OfferPreview } from '@/types';
import NoPlacesAvailable from '../no-places-available/no-places-available.tsx';
import AvailablePlaces from '../available-places/available-places.tsx';

interface PlacesContainerProps {
  offers: OfferPreview[];
  handleCardMouseEnter: (id: OfferPreview['id']) => void;
  handleCardMouseLeave: () => void;
}

const PlacesContainer: React.FC<PlacesContainerProps> = ({
  offers,
  handleCardMouseEnter,
  handleCardMouseLeave,
}) => {
  const noPlacesAvailable = offers.length === 0;

  return noPlacesAvailable ? (
    <NoPlacesAvailable />
  ) : (
    <AvailablePlaces
      offers={offers}
      handleCardMouseEnter={handleCardMouseEnter}
      handleCardMouseLeave={handleCardMouseLeave}
    />
  );
};

export default PlacesContainer;
