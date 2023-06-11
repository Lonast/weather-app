import React from "react";
import rain from "../../assets/rain.svg";
import Text from "../Text";
import cloud from "../../assets/cloud.svg";
import { WeatherProps } from "../../types/types";

const RainShower: React.FC<WeatherProps> = ({ weatherCode }) => {
  const weather = () => {
    switch (weatherCode) {
      case 61:
        return "Slight rain";
      case 63:
        return "Moderate rain";
      case 65:
        return "Heavy  rain";
      case 80:
        return "Slight rain shower";
      case 81:
        return "Moderate rain shower";
      case 82:
        return "Violent rain shower";
    }
  };
  return (
    <>
      <Text text={weather()} />
      <img
        className="absolute bottom-20 animate-up-down self-center justify-self-center h-1/5 w-1/5"
        src={rain}
      />
      <img
        className="absolute self-center justify-self-center   h-2/5 w-2/5"
        src={cloud}
      />
    </>
  );
};

export default RainShower;
