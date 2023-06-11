import React from "react";
import cloud from "../../assets/cloud.svg";
import sun from "../../assets/sun.svg";
import Text from "../Text";
import { WeatherProps } from "../../types/types";

const MainlyClear: React.FC<WeatherProps> = ({ weatherCode }) => {
  const weather = () => {
    switch (weatherCode) {
      case 1:
        return "Mainly clear";
      case 2:
        return "Partly cloudy";
      case 3:
        return "Overcast";
    }
  };
  return (
    <>
      <Text text={weather()} />
      <img
        className="right-1/4 absolute self-center justify-self-center  h-2/5 w-2/5"
        src={sun}
      />
      <img
        className="animate-up-down bottom-28 absolute self-center justify-self-center   h-2/5 w-2/5"
        src={cloud}
      />
    </>
  );
};

export default MainlyClear;
