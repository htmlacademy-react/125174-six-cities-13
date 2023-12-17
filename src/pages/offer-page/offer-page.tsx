import { useParams } from 'react-router-dom';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import NearbyPlaces from '../../components/nearby-places/nearby-places';
import {
  getIsNearbyLoading,
  getIsOfferLoading,
  getIsReviewsLoading,
  getNearby,
  getOffer,
  useAppSelector,
} from '@/store';
import NotFoundPage from '../not-found-page/not-found-page';
import { useOfferData, usePageInfo } from './hooks';
import OfferDetails from '../../components/offer-details/offer-details';
import { getShuffledNearby } from './utils';
import { MAX_OFFERS_PREVIEW } from './const';

function OfferPage(): JSX.Element | null {
  const offer = useAppSelector(getOffer);
  const nearbyList = useAppSelector(getNearby);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const isNearbyLoading = useAppSelector(getIsNearbyLoading);

  const isAllLoading = isOfferLoading || isNearbyLoading || isReviewsLoading;
  const limitedNearby = getShuffledNearby(nearbyList).slice(0, MAX_OFFERS_PREVIEW);
  const id = String(useParams().id);

  useOfferData(id);
  usePageInfo(offer);

  if (isAllLoading) {
    return <LoadingScreen />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <main className="page__main page__main--offer">
      <OfferDetails offer={offer} id={id} limitedNearby={limitedNearby} />
      <div className="container">
        <NearbyPlaces nearPlaces={limitedNearby} />
      </div>
    </main>
  );
}

export default OfferPage;
