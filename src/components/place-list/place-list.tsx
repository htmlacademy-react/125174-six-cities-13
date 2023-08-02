import { OfferPreview } from '../../mocks/offer.ts';
import CommonPlaceCard from '../common-place-card/common-place-card.tsx';
import { SortingType } from '../../const.ts';
import { useAppSelector } from '../../store/hooks.ts';

const SortingCallback: Record<SortingType, (firstOffer: OfferPreview, secondOffer: OfferPreview) => number> = {
  [SortingType.Popular]: () => 0,
  [SortingType.LowToHigh]: (a, b) => a.price - b.price,
  [SortingType.HighToLow]: (a, b) => b.price - a.price,
  [SortingType.TopRated]: (a, b) => b.rating - a.rating
};

export type CardType = 'cities' | 'favorites' | 'near-places';

type OfferListProps = {
  offers: OfferPreview[];
  cardType: CardType;
  handleCardMouseEnter?: (id: OfferPreview['id']) => void;
  handleCardMouseLeave?: () => void;
};

function PlaceList({ offers, cardType, handleCardMouseLeave, handleCardMouseEnter }: OfferListProps): JSX.Element {
  const selectedSortType = useAppSelector((state) => state.selectedSortType);
  const sortedOffers = [...offers].sort(SortingCallback[selectedSortType]);

  return (
    <>
      {sortedOffers.map((offer) => (
        <CommonPlaceCard
          key={offer.id}
          {...offer}
          cardType={cardType}
          handleCardMouseEnter={handleCardMouseEnter}
          handleCardMouseLeave={handleCardMouseLeave}
        />
      ))}
    </>
  );
}

export default PlaceList;