import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface MainPageProsp {
  temperature: number;
  windspeed: number;
  weatherCode: number;
  isDay: number;
}

const MainPage: React.FC<MainPageProsp> = (props) => {
  const { temperature } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`transition-colors h-screen grid grid-rows-[2fr,1fr] ${
        theme ? "bg-slate-600" : "bg-white"
      }`}
    >
      <h2 className="text-3xl font-bold">{temperature}</h2>
    </main>
  );
};

export default MainPage;
