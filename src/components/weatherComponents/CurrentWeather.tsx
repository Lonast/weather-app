import React from "react";
import { useAppSelector } from "../../hooks/hookType";
import ClearSky from "./ClearSky";
import ColdRain from "./ColdRain";
import Drizzle from "./Drizzle";
import MainlyClear from "./MainlyClear";
import RainShower from "./RainShower";
import Snow from "./Snow";
import Thunderstorm from "./Thunderstorm";
import ThunderstormHail from "./ThunderstormHail";
import Fog from "./Fog";

const CurrentWeather: React.FC = () => {
  const selector = useAppSelector((state) => state.weather.weather);
  const weatherCode = selector.current_weather.weathercode;

  const weather = () => {
    switch (weatherCode) {
      case 0:
        return <ClearSky />;
      case 1:
      case 2:
      case 3:
        return <MainlyClear weatherCode={weatherCode} />;
      case 45:
      case 48:
        return <Fog weatherCode={weatherCode} />;
      case 51:
      case 52:
      case 55:
        return <Drizzle weatherCode={weatherCode} />;
      case 56:
      case 57:
      case 66:
      case 67:
        return <ColdRain weatherCode={weatherCode} />;
      case 61:
      case 63:
      case 65:
      case 80:
      case 81:
      case 82:
        return <RainShower weatherCode={weatherCode} />;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return <Snow weatherCode={weatherCode} />;
      case 95:
        return <Thunderstorm />;
      case 96:
      case 99:
        return <ThunderstormHail weatherCode={weatherCode} />;
    }
  };
  return (
    <div className="z-0 mt-36 relative sm:min-h-[490px] max-h-[490px] grid h-full w-full sm:mt-0">
      {weather()}
    </div>
  );
};

export default CurrentWeather;
