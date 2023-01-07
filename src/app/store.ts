import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import portfolioReducer from './slices/portfolioSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    portfolio: portfolioReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
