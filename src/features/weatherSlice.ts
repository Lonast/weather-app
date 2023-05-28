import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface Coords {
  x: string;
  y: string;
}
interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
  };
}
type WeatherState = {
  weather: Weather;
};
const initialState: WeatherState = {
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
  },
};
export const getWeatherThunk = createAsyncThunk(
  "weather/getWeatherThunk",
  async (coords: Coords) => {
    const { x, y } = coords;
    if (x !== "") {
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${x}&longitude=${y}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
      );
      return res.data;
    }
  }
);
export const weatherSilce = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    getWeater: (state, action: PayloadAction) => {},
  },
  extraReducers(builder) {
    builder.addCase(
      getWeatherThunk.fulfilled,
      (state, action: PayloadAction<Weather>) => {
        state.weather = action.payload;
      }
    );
  },
});
export const { getWeater } = weatherSilce.actions;
export default weatherSilce.reducer;
