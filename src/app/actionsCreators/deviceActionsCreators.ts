import { deviceFormatSlice } from 'app/slices/deviceFormatSlice';

import { AppDispatch } from 'app/store';

export const setMobileFormat = () => {
  return (dispatch: AppDispatch) => {
    dispatch(deviceFormatSlice.actions.setMobileFormat());
  };
};

export const setDesktopFormat = () => {
  return (dispatch: AppDispatch) => {
    dispatch(deviceFormatSlice.actions.setDesktopFormat());
  };
};
