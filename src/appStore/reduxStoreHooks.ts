import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateElement } from '../features/elementSlice';

import { AppState } from './reduxStoreInterfaces';
import { TilesActionValues } from 'components/tiles/tilesInterfaces';

function useElementsStore(elementData: { referenceElementKey: string; value: TilesActionValues }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateElement(elementData));
  }, [dispatch]);

  const elementStoredData = useSelector(
    (state: AppState) => state.layoutElements.elements[elementData.referenceElementKey]
  );

  return elementStoredData;
}

export { useElementsStore };
