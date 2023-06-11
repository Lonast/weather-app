import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAppSelector } from "../hooks/hookType";

const Time = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const geolocation = useAppSelector((state) => state.geolocation.geolocation);
  const loading = useAppSelector((state) => state.weather.loading);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date());
    }, 60000 - currentTime.getSeconds() * 1000);
    return function cleanTimer() {
      clearInterval(timer);
    };
  });
  return (
    <div
      className={`row-start-3 row-end-3 h-20 pl-5 flex-col overflow-hidden flex text-4xl font-bold w-80 sm:w-44 rounded-r-md text-white transition-all sm:pl-0 sm:hover:h-32 sm:hover:shadow-md sm:row-start-1 sm:row-end-1 sm:items-center sm:absolute sm:h-full sm:flex-col ${
        theme ? "hover:bg-slate-800 " : "hover:bg-slate-400 "
      }`}
    >
      <section className="pt-3">
        {currentTime.toLocaleTimeString([], {
          hour: "2-digit",
        })}
        <span className="animate-blink">:</span>
        {currentTime.toLocaleTimeString([], {
          minute: "2-digit",
        }).length === 1
          ? "0"
          : ""}
        {currentTime.toLocaleTimeString([], {
          minute: "2-digit",
        })}
      </section>
      {loading ? (
        <p></p>
      ) : (
        <section className="flex pl-1 sm:pl-0 sm:flex-col sm:items-center">
          <p className="text-xl sm:mt-2">{geolocation.city},</p>
          <p className="pl-1 sm:pl-0 text-xl">{geolocation.region}</p>
        </section>
      )}
    </div>
  );
};

export default Time;
