import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
  page: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { increment, decrement, setPage } = pageSlice.actions;
export const selectPage = (state: RootState) => state.page.page;
export default pageSlice.reducer;
