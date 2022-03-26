import { configureStore } from '@reduxjs/toolkit';
import placeReducer from '../features/places/placeSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    places: placeReducer,
    theme: themeReducer,
  },
});
