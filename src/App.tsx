import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import MainPage from "./components/MainPage";
import { ThemeContextProvider } from "./context/ThemeContext";
import { getWeatherThunk } from "./features/weatherSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hookType";
import ReactLoading from "react-loading";
import { getGeoThunk } from "./features/geolocationSlice";

function App() {
  const selector = useAppSelector((state) => state.weather.weather);
  const loading = useAppSelector((state) => state.weather.loading);
  const [theme, setTheme] = useState<boolean>(false);

  const [coords, setCoords] = useState({ x: "", y: "" });
  const dispatch = useAppDispatch();
  const themeHandler = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    dispatch(getWeatherThunk());
    dispatch(getGeoThunk());
  }, []);

  return (
    <ThemeContextProvider theme={theme} themeHandler={themeHandler}>
      <div className="w-screen select-none h-screen flex flex-col">
        <Header />
        {loading ? (
          <div
            className={`h-full w-full flex items-center justify-center ${
              theme ? "bg-slate-600" : "white"
            }`}
          >
            <ReactLoading
              type={"spin"}
              color={`${theme ? "rgb(30 41 59)" : "rgb(148 163 184)"}`}
              height={375}
              width={375}
            />
          </div>
        ) : (
          selector && (
            <MainPage
              temperature={selector.current_weather.temperature}
              windspeed={selector.current_weather.windspeed}
              weatherCode={selector.current_weather.weathercode}
              isDay={selector.current_weather.is_day}
            />
          )
        )}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
