import { langSlice } from 'app/slices/langSlice';
import type { langType } from 'i18n';
import { AppDispatch } from 'app/store';

export const setLang = (lang: langType) => {
  return (dispatch: AppDispatch) => {
    dispatch(langSlice.actions.setLang(lang));
  };
};
