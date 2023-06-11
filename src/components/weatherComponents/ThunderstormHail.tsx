import React from "react";
import cloud from "../../assets/cloud.svg";
import hail from "../../assets/hail.svg";
import lightning from "../../assets/lightning.svg";
import Text from "../Text";
import { WeatherProps } from "../../types/types";

const ThunderstormHail: React.FC<WeatherProps> = ({ weatherCode }) => {
  const weather = () => {
    switch (weatherCode) {
      case 96:
        return "Thunderstorm with slight hail";
      case 99:
        return "Thunderstorm with heavy hail";
    }
  };
  return (
    <>
      <Text text={weather()} />
      <img
        className="absolute bottom-20 animate-up-down self-center justify-self-center h-1/5 w-1/5"
        src={hail}
      />
      <img
        className="absolute bottom-28 animate-strike self-center justify-self-center h-1/5 w-1/5"
        src={lightning}
      />
      <img
        className="absolute self-center justify-self-center h-2/5 w-2/5"
        src={cloud}
      />
    </>
  );
};

export default ThunderstormHail;
