import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
  isDesktop: true,
};

export const deviceFormatSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setMobileFormat: (state) => {
      state.isDesktop = false;
    },
    setDesktopFormat: (state) => {
      state.isDesktop = true;
    },
  },
});

export const { setDesktopFormat, setMobileFormat } = deviceFormatSlice.actions;
export const selectDeviceFormat = (state: RootState) => state.device.isDesktop;
export default deviceFormatSlice.reducer;
