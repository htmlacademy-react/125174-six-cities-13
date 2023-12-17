import { memo, useState } from 'react';
import cn from 'classnames';
import { SortingType } from '@/const';
import { getSelectedSortType, useAppDispatch, useAppSelector } from '@/store';
import { changeSortingType } from '@/store/slices/app-process/app-process';

function PlacesSorting(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const selectedSortType = useAppSelector(getSelectedSortType);
  const dispatch = useAppDispatch();

  const toggleSortingOptions = () => setIsOpened((prevState) => !prevState);

  const handleSortTypeChange = (sortType: SortingType) => {
    dispatch(changeSortingType(sortType));
    setIsOpened(false);
  };

  const sortingOptionsClass = cn('places__options', 'places__options--custom', {
    'places__options--opened': isOpened,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleSortingOptions}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={sortingOptionsClass}>
        {Object.entries(SortingType).map(([sortType, title]) => (
          <li
            key={title}
            tabIndex={0}
            className={cn('places__option', {
              'places__option--active': selectedSortType === sortType,
            })}
            onClick={() => handleSortTypeChange(title as SortingType)}
          >
            {title}
          </li>
        ))}
      </ul>
    </form>
  );
}

const PlacesSortingMemo = memo(PlacesSorting);

export default PlacesSortingMemo;
