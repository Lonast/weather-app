import React, { useContext } from "react";
import { WeatherCardProps } from "../../types/types";
import temp from "../../assets/temp.svg";
import wind from "../../assets/wind.svg";
import { ThemeContext } from "../../context/ThemeContext";
import clock from "../../assets/clock.svg";

const WeatherCard = ({ temperature, windSpeed, time }: WeatherCardProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`mt-5 h-[400px] cursor-pointer mr-4 ml-4 w-32 p-10 shadow-sm flex flex-col items-center justify-center text-2xl font-bold gap-5 text-white bg-slate-400 transition-all rounded-md hover:scale-105 ${
        theme ? "bg-slate-800" : "bg-slate-400"
      } bg-slate-400 rounded-xl p-2 flex flex-row`}
    >
      <div className="flex flex-col items-center">
        <img width={50} src={temp} alt="" />
        <p>{temperature} °C</p>
      </div>
      <div className="flex flex-col items-center">
        <img width={50} src={wind} alt="" />
        <p>{windSpeed} km/h</p>
      </div>
      <span className="flex flex-col items-center">
        <img src={clock} width={50} alt="" />
        <p>{time.slice(5, 10)}</p>
        <p>{time.slice(12)}</p>
      </span>
    </div>
  );
};

export default WeatherCard;
