import React from "react";
import fog from "../../assets/fog.svg";
import cloud from "../../assets/cloud.svg";
import coldCloud from "../../assets/coldCloud.svg";
import Text from "../Text";

import { WeatherProps } from "../../types/types";

const Fog: React.FC<WeatherProps> = ({ weatherCode }) => {
  const weather = () => {
    switch (weatherCode) {
      case 45:
        return "Fog";
      case 48:
        return "Depositing rime fog";
    }
  };
  return (
    <>
      <Text text={weather()} />
      {weatherCode === 48 ? (
        <img
          className="absolute right-44 top-60 self-center justify-self-center h-1/5 w-1/5"
          src={coldCloud}
        />
      ) : (
        <img
          className="absolute self-center justify-self-center   h-2/5 w-2/5"
          src={cloud}
        />
      )}
      <img
        className="absolute animate-left-right self-center justify-self-center h-2/5 w-2/5"
        src={fog}
      />
    </>
  );
};

export default Fog;
