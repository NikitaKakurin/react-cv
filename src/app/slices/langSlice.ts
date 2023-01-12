import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import i18n, { langType } from 'i18n';

interface IState {
  lang: langType;
}

const initialState: IState = {
  lang: 'en',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<langType>) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;
export const selectLang = (state: RootState) => state.lang.lang;
export default langSlice.reducer;
