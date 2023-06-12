import React, { useContext, useState } from "react";
import sun from "../../src/assets/sun-svgrepo-com.svg";
import moon from "../../src/assets/night-icon.svg";
import { ThemeContext } from "../context/ThemeContext";
import Time from "./Time";

export const Header: React.FC = () => {
  const { themeHandler, theme } = useContext(ThemeContext);
  console.log("a");
  return (
    <nav
      className={`w-full z-10 absolute h-52 transition-all grid sm:h-16 sm:grid-cols-[2fr, 1fr, 2fr]  ${
        theme ? "bg-slate-800" : "bg-slate-400"
      }`}
    >
      <Time />
      <span className="row-start-1 row-end-1 justify-self-center text-white flex font-[Roboto] text-3xl font-bold sm:col-start-2 sm:col-end-2 items-center sm:justify-center sm:pl-20">
        YOUR WEATHER
      </span>
      <div
        onClick={themeHandler}
        className="row-start-2 row-end-2 ml-5 grid self-start justify-self-start w-20 h-10 bg-white mt-auto mb-auto mr-2 rounded-full p-0.5 relative sm:justify-self-end sm:ml-0 sm:col-start-3 sm:col-end-3 sm:row-start-1 sm:row-end-1"
      >
        <div
          className={`z-10 h-9 w-9 rounded-full relative ${
            theme ? "bg-slate-800 ml-0.5" : "bg-slate-400 ml-10 h-14"
          } transition-all`}
        ></div>
        <img src={sun} className="absolute z-0 w-8 h-8 ml-1 mt-1" alt="" />
        <img src={moon} className="absolute z-0 w-8 h-8 right-1 mt-1" alt="" />
      </div>
    </nav>
  );
};
