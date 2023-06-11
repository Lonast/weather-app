import { configureStore } from "@reduxjs/toolkit";
import geolocationSlice from "../features/geolocationSlice";
import weatherReducer from "../features/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    geolocation: geolocationSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
