import React from "react";
import cloud from "../../assets/cloud.svg";
import snow from "../../assets/snow.svg";
import Text from "../Text";
import { WeatherProps } from "../../types/types";

const Snow: React.FC<WeatherProps> = ({ weatherCode }) => {
  const weather = () => {
    switch (weatherCode) {
      case 71:
        return "Slight snow fall";
      case 73:
        return "Moderate snow fall";
      case 75:
        return "Heavy snow fall";
      case 77:
        return "Snow grains";
      case 85:
        return "Slight snow showers";
      case 86:
        return "Heavy snow showers";
    }
  };
  return (
    <>
      <Text text={weather()} />
      <img
        className="absolute bottom-20 animate-up-down self-center justify-self-center h-1/5 w-1/5"
        src={snow}
      />
      <img
        className="absolute self-center justify-self-center   h-2/5 w-2/5"
        src={cloud}
      />
    </>
  );
};

export default Snow;
