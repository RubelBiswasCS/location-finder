import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import placeReducer from '../features/places/placeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    places: placeReducer,
  },
});
