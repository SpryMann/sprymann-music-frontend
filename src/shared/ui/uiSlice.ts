import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiSlice {
  showSidebar: boolean;
}

const initialState: UiSlice = {
  showSidebar: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeShowSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
    },
  },
});

export const { changeShowSidebar } = uiSlice.actions;
export default uiSlice.reducer;
