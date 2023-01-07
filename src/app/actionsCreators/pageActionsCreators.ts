import { pageSlice } from 'app/slices/pageSlice';
import { AppDispatch } from 'app/store';

export const increasePage = () => {
  return (dispatch: AppDispatch) => {
    dispatch(pageSlice.actions.increment());
  };
};

export const decrementPage = () => {
  return (dispatch: AppDispatch) => {
    dispatch(pageSlice.actions.decrement());
  };
};

export const setPage = (page: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(pageSlice.actions.setPage(page));
  };
};
