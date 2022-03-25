import { configureStore } from '@reduxjs/toolkit';
import placeReducer from '../features/places/placeSlice';

export const store = configureStore({
  reducer: {
    places: placeReducer,
  },
});
