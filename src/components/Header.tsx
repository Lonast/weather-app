import React, { useContext, useState } from "react";
import sun from "../../src/assets/sun-svgrepo-com.svg";
import moon from "../../src/assets/night-icon.svg";
import { ThemeContext } from "../context/ThemeContext";

export const Header: React.FC = () => {
  const { themeHandler, theme } = useContext(ThemeContext);
  return (
    <nav
      className={`w-full h-16 transition-all  grid grid-cols-3 ${
        theme ? "bg-slate-800" : "bg-slate-400"
      }`}
    >
      <span className="flex font-[Roboto] text-3xl font-bold col-start-2 col-end-2 items-center justify-center text-white">
        <p>YOUR WEATHER</p>
      </span>
      <div
        onClick={themeHandler}
        className="grid justify-self-end w-20 h-10 bg-white mt-auto mb-auto mr-2 rounded-full p-0.5 relative col-start-3 col-end-3"
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
