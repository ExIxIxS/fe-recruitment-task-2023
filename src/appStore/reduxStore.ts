import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { layoutApi } from './services/layoutApi';
import updateElementReducer from './features/elementSlice';

const appStore = configureStore({
  reducer: {
    [layoutApi.reducerPath]: layoutApi.reducer,
    layoutElements: updateElementReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(layoutApi.middleware),
});

setupListeners(appStore.dispatch);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
