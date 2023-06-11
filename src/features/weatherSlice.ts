import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Weather, WeatherState } from "../types/types";

const initialState: WeatherState = {
  loading: false,

  weather: {
    latitude: 0,
    longitude: 0,
    generationtime_ms: 0,
    utc_offset_seconds: 0,
    timezone: "",
    timezone_abbreviation: "",
    elevation: 0,
    current_weather: {
      temperature: 0,
      windspeed: 0,
      winddirection: 0,
      weathercode: 0,
      is_day: 0,
      time: "",
    },
    hourly: {
      relativehumidity_2m: [],
      temperature_2m: [],
      time: [],
      windspeed_10m: [],
    },
    hourly_units: {
      relativehumidity_2m: 0,
      temperature_2m: 0,
      time: "",
      windspeed_10m: 0,
    },
  },
};
export const getWeatherThunk = createAsyncThunk(
  "weather/getWeatherThunk",
  async () => {
    const ip = await axios("https://api64.ipify.org?format=json");
    const geolocation = await axios(`https://ipapi.co/${ip.data.ip}/json/`);
    const res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${geolocation.data.latitude}&longitude=${geolocation.data.longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    );
    return res.data;
  }
);

export const weatherSilce = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getWeatherThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getWeatherThunk.fulfilled,
      (state, action: PayloadAction<Weather>) => {
        state.weather = action.payload;
        state.loading = false;
      }
    );
  },
});
export const {} = weatherSilce.actions;
export default weatherSilce.reducer;
