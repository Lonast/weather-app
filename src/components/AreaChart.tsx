import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ThemeContext } from "../context/ThemeContext";

interface AreaChartProps {
  labels: string[];
  data: number[];
  time: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const AreaChart: React.FC<AreaChartProps> = (props) => {
  const context = useContext(ThemeContext);
  const currentTime = parseInt(props.time.slice(11, 13)) + 3;
  const whatTime = () => {
    if (currentTime >= 24) {
      return [24, 48];
    } else {
      return [0, 24];
    }
  };
  const options = {
    responsive: true,
    scales: {
      y: {
        grid: {
          color: `${context.theme ? "#fff" : "#D3D3D3"}`,
        },
        ticks: {
          color: `${context.theme ? "#fff" : "#000"}`,
        },
      },
      x: {
        grid: {
          color: `${context.theme ? "#fff" : "#D3D3D3"}`,
        },
        ticks: {
          color: `${context.theme ? "#fff" : "#000"}`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  const labels = props.labels
    .slice(whatTime()[0], whatTime()[1])
    .map((item) => {
      return item.slice(11);
    });
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: props.data.slice(whatTime()[0], whatTime()[1]),
        borderColor: `${
          context.theme ? "rgb(30 41 59)" : "rgb(148 163 184) "
        } `,
        backgroundColor: `${
          context.theme ? "rgb(30 41 59)" : "rgb(148 163 184) "
        } `,
        pointBackgroundColor: `${context.theme ? "#fff" : "#505050"}`,
      },
    ],
  };

  return (
    <Line
      options={options}
      data={data}
      height={`${window.innerWidth < 1000 ? "90px" : "50px"}`}
    />
  );
};
