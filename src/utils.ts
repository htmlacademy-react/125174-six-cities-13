import { OfferPreview } from './mocks/offer.ts';

const RATING_STARS = 5;

const convertCapitalizeFirstLetter = (word: string) => word[0].toUpperCase() + word.slice(1);
const calculateRatingPercentage = (rating: number, stars: number = RATING_STARS) => window.Math.round(rating) * 100 / stars;
const getPluralSuffix = (count: number) => count === 1 ? '' : 's';
const groupFavoritesByCity = (favoriteList: OfferPreview[]) => (
  favoriteList.reduce((favoritesByCity: Record<string, OfferPreview[]>, item: OfferPreview) => {
    const cityName = item.city.name;
    favoritesByCity[cityName] = [...(favoritesByCity[cityName] || []), item];
    return favoritesByCity;
  }, {})
);

export {
  convertCapitalizeFirstLetter,
  calculateRatingPercentage,
  getPluralSuffix,
  groupFavoritesByCity
};