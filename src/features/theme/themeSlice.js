import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light',
  };
  

export const themeSlice = createSlice({
    name: 'theme',
    initialState:initialState,
    reducers: {
      toggleColorMode: (state,action) => {
          state.mode = action.payload;
      },
    },

  });
  

 
  export const selectTheme = (state) => state.theme.mode;
  export const { toggleColorMode } = themeSlice.actions;
  export default themeSlice.reducer;