import React from "react";
import coldRain from "../../assets/coldRain.svg";
import cloud from "../../assets/cloud.svg";
import { WeatherProps } from "../../types/types";
import Text from "../Text";

const ColdRain: React.FC<WeatherProps> = ({ weatherCode }) => {
  const weather = () => {
    switch (weatherCode) {
      case 56:
        return "Light freezing drizzle";
      case 57:
        return "Dense freezing drizzle";
      case 66:
        return "Light freezing rain";
      case 67:
        return "Heavy freezing rain";
    }
  };
  return (
    <>
      <Text text={weather()} />
      <img
        className="absolute bottom-20 animate-up-down self-center justify-self-center h-1/5 w-1/5"
        src={coldRain}
      />
      <img
        className="absolute self-center justify-self-center   h-2/5 w-2/5"
        src={cloud}
      />
    </>
  );
};

export default ColdRain;
