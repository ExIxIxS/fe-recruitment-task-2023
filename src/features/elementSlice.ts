/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const elementSlice = createSlice({
  name: 'elements',
  initialState: {
    elements: {} as Record<string, any>, // Add an index signature for elements
  },
  reducers: {
    updateElement: (state, action: PayloadAction<{ referenceElementKey: string; value: any }>) => {
      const { referenceElementKey, value } = action.payload;
      state.elements[referenceElementKey] = { ...state.elements[referenceElementKey], ...value };
    },
  },
});

export const { updateElement } = elementSlice.actions;
export default elementSlice.reducer;
