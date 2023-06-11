import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeolocationState, GeolocationType } from "../types/types";
import axios from "axios";

const initialState: GeolocationType = {
  geolocation: {
    asn: "",
    city: "",
    continent_code: "",
    country: "",
    country_area: 0,
    country_calling_code: "",
    country_capital: "",
    country_code: "",
    country_code_iso3: "",
    country_name: "",
    country_population: 0,
    country_tld: "",
    currency: "",
    currency_name: "",
    in_eu: false,
    ip: "",
    languages: "",
    latitude: 0,
    longitude: 0,
    network: "",
    org: "",
    postal: "",
    region: "",
    region_code: "",
    timezone: "",
    utc_offset: "",
    version: "",
  },
  loading: "",
};

export const getGeoThunk = createAsyncThunk("weather/getGeoThunk", async () => {
  const ip = await axios("https://api64.ipify.org?format=json");
  const geolocation = await axios(`https://ipapi.co/${ip.data.ip}/json/`);
  return geolocation.data;
});

export const geolocationSlice = createSlice({
  name: "geolocation",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getGeoThunk.fulfilled,
      (state, action: PayloadAction<GeolocationState>) => {
        state.geolocation = action.payload;
        state.loading = "fulfilled";
      }
    );
  },
});

export const {} = geolocationSlice.actions;
export default geolocationSlice.reducer;
