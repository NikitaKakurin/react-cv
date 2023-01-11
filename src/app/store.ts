import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import portfolioReducer from './slices/portfolioSlice';
import deviceFormatReducer from './slices/deviceFormatSlice';
import langReducer from './slices/langSlice';
export const store = configureStore({
  reducer: {
    page: pageReducer,
    portfolio: portfolioReducer,
    device: deviceFormatReducer,
    lang: langReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
