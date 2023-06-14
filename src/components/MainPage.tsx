import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import temp from "../assets/temp.svg";
import wind from "../assets/wind.svg";
import { AreaChart } from "./AreaChart";
import { useAppSelector } from "../hooks/hookType";
import CurrentWeather from "./weatherComponents/CurrentWeather";
import WeatherCard from "./weatherComponents/WeatherCard";
import * as uuid from "uuid";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const event = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", event);
    return function () {
      window.removeEventListener("resize", event);
    };
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };
  console.log(selector.hourly);

  return (
    <main
      className={`relative transition-colors h-[1200px] grid min-h-screen grid-rows-[2fr,150px,450px] md:grid-rows-[1fr,1fr,1fr] max-h-none w-full lg:h-full md:max-h-6 ${
        theme ? "bg-slate-600" : "bg-white"
      }`}
    >
      <CurrentWeather />
      <section className="z-10 select-none min-h-[100px] flex flex-col h-10 gap-10 justify-center lg:flex-row">
        <div
          className={`mx-12 flex justify-center hover:scale-110 transition-all lg:mx-0 max-h-20 ${
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
          className={`mx-12 flex justify-center hover:scale-110 transition-all  max-h-20 lg:mx-0 ${
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
      {width > 1024 ? (
        <AreaChart
          labels={selector.hourly.time}
          data={selector.hourly.temperature_2m}
          time={time}
        />
      ) : (
        <div
          className={`w-full flex flex-col items-center overflow-hidden h-[480px] z-0 ${
            theme ? "bg-slate-600" : "bg-white"
          }`}
        >
          <div
            className={`${
              width >= 755 ? "w-[98vw]" : "w-[96vw]"
            }   flex items-center pb-8 md:pt-20 h-[480px]`}
          >
            <MdChevronLeft
              className="opacity-70 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
              color={theme ? "white" : "black"}
            />
            <div
              id="slider"
              className="w-full flex flex-row overflow-x-auto scroll scroll-smooth whitespace-nowrap scrollbar-hide"
            >
              {selector.hourly.temperature_2m
                .slice(0, 48)
                .map((item, index) => {
                  return (
                    <WeatherCard
                      key={uuid.v4()}
                      temperature={item}
                      windSpeed={selector.hourly.windspeed_10m[index]}
                      time={selector.hourly.time[index]}
                    />
                  );
                })}
            </div>
            <MdChevronRight
              className="opacity-70 cursor-pointer hover:opacity-100"
              onClick={slideRight}
              size={40}
              color={theme ? "white" : "black"}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default MainPage;
