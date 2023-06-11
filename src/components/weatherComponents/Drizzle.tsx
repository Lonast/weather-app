import React from "react";
import drizzle from "../../assets/drizzle.svg";
import cloud from "../../assets/cloud.svg";
import { WeatherProps } from "../../types/types";
import Text from "../Text";

const Drizzle: React.FC<WeatherProps> = ({ weatherCode }) => {
  const weather = () => {
    switch (weatherCode) {
      case 51:
        return "Light drezzle";
      case 53:
        return "Moderate drezzle";
      case 55:
        return "Dense  drezzle";
    }
  };
  return (
    <>
      <Text text={weather()} />
      <img
        className="absolute bottom-20 animate-up-down self-center justify-self-center h-1/5 w-1/5"
        src={drizzle}
      />
      <img
        className="absolute self-center justify-self-center   h-2/5 w-2/5"
        src={cloud}
      />
    </>
  );
};

export default Drizzle;
