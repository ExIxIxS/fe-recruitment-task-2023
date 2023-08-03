import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createElement } from './features/elementSlice';

import { TilesActionValues } from 'components/tiles/tiles.interfaces';
import { RootState } from './reduxStore';

function useElementStoreData(elementData: {
  referenceElementKey: string;
  value: TilesActionValues;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createElement(elementData));
  }, [dispatch]);

  const elementStoredData = useSelector(
    (state: RootState) => state.layoutElements[elementData.referenceElementKey]
  );

  return elementStoredData;
}

export { useElementStoreData };
