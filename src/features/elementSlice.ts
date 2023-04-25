import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TilesActionValues } from '../components/tiles/tilesInterfaces';

const elementSlice = createSlice({
  name: 'elements',
  initialState: {
    elements: {} as Record<string, TilesActionValues>,
  },
  reducers: {
    updateElement: (
      state,
      action: PayloadAction<{ referenceElementKey: string; value: TilesActionValues }>
    ) => {
      const { referenceElementKey, value } = action.payload;
      state.elements[referenceElementKey] = { ...state.elements[referenceElementKey], ...value };
    },
  },
});

export const { updateElement } = elementSlice.actions;
export default elementSlice.reducer;
