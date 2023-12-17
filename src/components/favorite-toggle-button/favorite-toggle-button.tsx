import { useNavigate } from 'react-router-dom';

import { AppRoute, FavoriteStatus } from '@/const';

import {
  getIsFavoriteStatusSubmitting,
  changeFavoriteStatusAction,
  getAuthCheckedStatus,
  useAppDispatch,
  useAppSelector,
} from '@/store';

type BookmarkButtonProps = {
  isFavorite: boolean;
  id: string;
  iconWidth: number;
  iconHeight: number;
  buttonText: string;
  buttonClass: string;
  activeClass: string;
  iconClass: string;
};

function FavoriteToggleButton(props: BookmarkButtonProps) {
  const { isFavorite, id, buttonText, iconHeight, iconWidth, buttonClass, activeClass, iconClass } =
    props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hasUserAuth = useAppSelector(getAuthCheckedStatus);
  const disabledBookmarkButton = useAppSelector(getIsFavoriteStatusSubmitting);

  const handleBookmarkClick = () => {
    if (!hasUserAuth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(
      changeFavoriteStatusAction({
        offerId: id,
        status: isFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add,
      }),
    );
  };

  return (
    <button
      className={`bookmark-button button ${buttonClass} ${isFavorite ? activeClass : ''}`}
      type="button"
      disabled={disabledBookmarkButton}
      onClick={handleBookmarkClick}
    >
      <svg className={`bookmark-icon ${iconClass}`} width={iconWidth} height={iconHeight}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{buttonText}</span>
    </button>
  );
}

export default FavoriteToggleButton;
