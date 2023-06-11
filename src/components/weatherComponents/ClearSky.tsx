import React from "react";
import Text from "../Text";
import sun from "../../assets/sun.svg";

const ClearSky: React.FC = () => {
  return (
    <>
      <Text text="Clear sky" />
      <img
        className=" self-center justify-self-center animate-spin-slow  h-2/5 w-2/5"
        src={sun}
        alt=""
      />
    </>
  );
};

export default ClearSky;
