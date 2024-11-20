import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, Page } from './initialState';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSidebarIsOpen: (state) => {
      state.sidebarIsOpen = !state.sidebarIsOpen;
    },
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
  },
});

export const { setSidebarIsOpen, setPage } = appSlice.actions;
export default appSlice.reducer;
