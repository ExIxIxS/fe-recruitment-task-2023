import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { layoutApi } from '../services/layoutApi';

const appStore = configureStore({
  reducer: {
    [layoutApi.reducerPath]: layoutApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(layoutApi.middleware),
});

setupListeners(appStore.dispatch);

export default appStore;
