import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import temp from "../assets/temp.svg";
import wind from "../assets/wind.svg";
import { AreaChart } from "./AreaChart";
import { useAppSelector } from "../hooks/hookType";
import CurrentWeather from "./weatherComponents/CurrentWeather";

interface MainPageProsp {
  temperature: number;
  windspeed: number;
  weatherCode: number;
  isDay: number;
}
const data: (arr: number[], time: string) => number = (arr, time) => {
  return arr[parseInt(time.slice(11, 13)) + 3];
};

const MainPage: React.FC<MainPageProsp> = () => {
  const selector = useAppSelector((state) => state.weather.weather);
  const time = selector.current_weather.time;
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`transition-colors h-screen grid grid-rows-[2fr,1fr] ${
        theme ? "bg-slate-600" : "bg-white"
      }`}
    >
      <CurrentWeather />
      <section className="select-none min-h-[100px] flex flex-col gap-10 justify-center md:flex-row">
        <div
          className={`mx-12 flex justify-center hover:scale-110 transition-all md:mx-0 max-h-20 ${
            theme ? "bg-slate-800" : "bg-slate-400"
          } bg-slate-400 rounded-xl p-2 flex flex-row`}
        >
          <img className="fill-white h-16 w-16" src={temp} alt="" />
          <h2 className="justify-self-center row-start-2 row-end-2 text-5xl font-bold text-white">
            {data(selector.hourly.temperature_2m, time)}
            °C
          </h2>
        </div>
        <div
          className={`mx-12 flex justify-center hover:scale-110 transition-all  max-h-20 md:mx-0 ${
            theme ? "bg-slate-800" : "bg-slate-400"
          } bg-slate-400 rounded-xl p-2 flex flex-row`}
        >
          <img className=" h-16 w-16" src={wind} alt="" />
          <h2 className="justify-self-center row-start-2 row-end-2 text-5xl font-bold text-white">
            {data(selector.hourly.windspeed_10m, time)}
             km/h
          </h2>
        </div>
      </section>
      <AreaChart
        labels={selector.hourly.time}
        data={selector.hourly.temperature_2m}
        time={time}
      />
    </main>
  );
};

export default MainPage;
