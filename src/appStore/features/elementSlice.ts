import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TilesActionValues } from '../../components/tiles/tiles.interfaces';

type ElementsState = {
  [key: string]: TilesActionValues;
};

const initialElementsState: ElementsState = {};

const elementSlice = createSlice({
  name: 'elements',
  initialState: initialElementsState,
  reducers: {
    createElement: (
      state,
      action: PayloadAction<{ referenceElementKey: string; value: TilesActionValues }>
    ) => {
      const { referenceElementKey, value } = action.payload;
      state[referenceElementKey] = {
        ...state[referenceElementKey],
        ...value,
      };
    },
    updateElement: (
      state,
      action: PayloadAction<{ referenceElementKey: string; value: TilesActionValues }>
    ) => {
      const { referenceElementKey, value } = action.payload;
      state[referenceElementKey] = {
        ...state[referenceElementKey],
        ...value,
      };
    },
  },
});

export const { createElement, updateElement } = elementSlice.actions;

export default elementSlice.reducer;
