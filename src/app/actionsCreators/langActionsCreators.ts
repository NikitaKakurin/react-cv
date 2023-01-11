import { langSlice } from 'app/slices/langSlice';

import { AppDispatch } from 'app/store';

export const setLang = (lang: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(langSlice.actions.setLang(lang));
  };
};
