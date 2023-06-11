export interface Weather {
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
  hourly: {
    relativehumidity_2m: number[];
    temperature_2m: number[];
    time: string[];
    windspeed_10m: number[];
  };
  hourly_units: {
    relativehumidity_2m: number;
    temperature_2m: number;
    time: string;
    windspeed_10m: number;
  };
}
export type WeatherState = {
  weather: Weather;
  loading: boolean;
};
export interface WeatherProps {
  weatherCode: number;
}

export interface GeolocationState {
  asn: string;
  city: string;
  continent_code: string;
  country: string;
  country_area: number;
  country_calling_code: string;
  country_capital: string;
  country_code: string;
  country_code_iso3: string;
  country_name: string;
  country_population: number;
  country_tld: string;
  currency: string;
  currency_name: string;
  in_eu: false;
  ip: string;
  languages: string;
  latitude: number;
  longitude: number;
  network: string;
  org: string;
  postal: string;
  region: string;
  region_code: string;
  timezone: string;
  utc_offset: string;
  version: string;
}

export type GeolocationType = {
  geolocation: GeolocationState;
  loading: string;
};
