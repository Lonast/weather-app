import React from "react";
import cloud from "../../assets/cloud.svg";
import lightning from "../../assets/lightning.svg";
import Text from "../Text";

const Thunderstorm: React.FC = () => {
  return (
    <>
      <Text text=" Thunderstorm: Slight or moderate" />
      <img
        className="absolute bottom-28 animate-strike self-center justify-self-center h-1/5 w-1/5"
        src={lightning}
      />
      <img
        className="absolute self-center justify-self-center   h-2/5 w-2/5"
        src={cloud}
      />
    </>
  );
};

export default Thunderstorm;
