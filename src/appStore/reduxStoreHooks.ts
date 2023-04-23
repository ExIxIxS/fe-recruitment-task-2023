/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateElement } from '../features/elementSlice';

import { AppState } from './reduxStoreInterfaces';

function useElementsStore(elementData: { referenceElementKey: string; value: any }) {
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
