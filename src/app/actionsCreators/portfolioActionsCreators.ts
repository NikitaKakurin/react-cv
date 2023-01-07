import { portfolioSlice } from 'app/slices/portfolioSlice';
import { AppDispatch } from 'app/store';

export const showPortfolioPopup = () => {
  return (dispatch: AppDispatch) => {
    dispatch(portfolioSlice.actions.showPortfolioPopup());
  };
};

export const hidePortfolioPopup = () => {
  return (dispatch: AppDispatch) => {
    dispatch(portfolioSlice.actions.hidePortfolioPopup());
  };
};

export const setIndexWork = (index: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(portfolioSlice.actions.setIndexWork(index));
  };
};
