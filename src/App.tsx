import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import MainPage from "./components/MainPage";
import { ThemeContextProvider } from "./context/ThemeContext";
import { getWeater, getWeatherThunk } from "./features/weatherSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hookType";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const selector = useAppSelector((state) => state.weather.weather);
  const [coords, setCoords] = useState({ x: "", y: "" });
  const dispatch = useAppDispatch();
  const themeHandler = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  function success(pos: any) {
    if (coords.x === "") {
      setCoords({ x: pos.coords.latitude, y: pos.coords.longitude });
    }
  }

  navigator.geolocation.getCurrentPosition(success);
  useEffect(() => {
    dispatch(getWeatherThunk(coords));
  }, [coords]);
  try {
    console.log(selector.latitude);
  } catch {}
  return (
    <ThemeContextProvider theme={theme} themeHandler={themeHandler}>
      <div className="h-screen flex flex-col">
        <Header />
        {selector && (
          <MainPage
            temperature={selector.current_weather.temperature}
            windspeed={selector.current_weather.windspeed}
            weatherCode={selector.current_weather.weathercode}
            isDay={selector.current_weather.is_day}
          />
        )}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
