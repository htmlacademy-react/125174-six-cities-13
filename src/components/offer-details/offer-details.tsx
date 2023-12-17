import { useAppSelector, getAuthCheckedStatus } from '@/store';
import { OfferPreview, OfferFull } from '@/types';
import FormComment from '../form-comment/form-comment';
import OfferDescription from '../offer-description/offer-description';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferHost from '../offer-host/offer-host';
import OfferMap from '../offer-map/offer-map';
import Reviews from '../reviews/reviews';
import { getReviews } from '@/store';

type OfferDetailsProps = {
  id: string;
  limitedNearby: OfferPreview[];
  offer: OfferFull;
};

function OfferDetails({ offer, id, limitedNearby }: OfferDetailsProps) {
  const reviews = useAppSelector(getReviews);
  const isAuthorization = useAppSelector(getAuthCheckedStatus);

  const { images, description, host } = offer;
  const mapCenter = offer.city.location;

  return (
    <section className="offer">
      <OfferGallery images={images} />
      <div className="offer__container container">
        <div className="offer__wrapper">
          <OfferDescription offer={offer} />
          <OfferHost host={host} description={description} />
          <Reviews reviews={reviews}>{isAuthorization && <FormComment offerId={id} />}</Reviews>
        </div>
      </div>
      <OfferMap
        offers={limitedNearby}
        centerCoordinates={mapCenter}
        selectedOfferId={id}
        currentOffer={offer}
      />
    </section>
  );
}

export default OfferDetails;
