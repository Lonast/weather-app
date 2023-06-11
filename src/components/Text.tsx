import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface TextProps {
  text?: string;
}

const Text = ({ text }: TextProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h1
      className={`transition-all absolute top-20 text-4xl font-bold text-center w-full pr-5 ${
        theme ? "text-white" : " text-slate-600"
      }`}
    >
      {text}
    </h1>
  );
};

export default Text;
