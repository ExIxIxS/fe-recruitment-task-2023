import { layoutApi } from '../services/layoutApi';
import updateElementReducer from '../features/elementSlice';

interface AppState {
  [layoutApi.reducerPath]: ReturnType<typeof layoutApi.reducer>;
  layoutElements: ReturnType<typeof updateElementReducer>;
}

export type { AppState };
