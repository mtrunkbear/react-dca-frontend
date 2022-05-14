import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { getData } from "../api/getData";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function Chart() {
  const [openSerie, setOpenSerie] = useState();
  const [dateSerie, setDateSerie] = useState();
  const [chartData, setChartData] = useState();

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: chartData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointStyle: 'circle',
        pointRadius: 0,
        pointHoverRadius: 10
      },
    ],
  };

  useState(async () => {
    const symbol = "BTC-USD";
    const period1 = "2010-02-01";

    const period2 = "2021-02-01";

    const datos = await getData(symbol, period1, period2);

    const arrayDatos = [datos][0].data;
    //console.log(arrayDatos)
    setOpenSerie(arrayDatos.map((item) => item.open));
    setDateSerie(arrayDatos.map((item) => item.date.split("T")[0]));

    const chartData = arrayDatos.map((item) => ({
      x: item.date.split("T")[0],
      y: item.open,
    }));

    console.log(chartData);

    setChartData(chartData);
  });

  return <Line options={options} data={data} />;
}
