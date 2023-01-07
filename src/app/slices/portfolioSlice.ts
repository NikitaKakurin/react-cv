import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  popupVisible: false,
  indexWork: 0,
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    showPortfolioPopup: (state) => {
      state.popupVisible = true;
    },
    hidePortfolioPopup: (state) => {
      state.popupVisible = false;
    },
    setIndexWork: (state, action: PayloadAction<number>) => {
      state.indexWork = action.payload;
    },
  },
});

export const { setIndexWork, hidePortfolioPopup, showPortfolioPopup } = portfolioSlice.actions;
export default portfolioSlice.reducer;
