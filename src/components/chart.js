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
import { useState, useEffect } from "react";
import { dcaCalculator } from "../dcafunctions/dcaCalculator";

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

export const Chart = (props) => {
  //const [dateSerie, setDateSerie] = useState();
  const [chartData, setChartData] = useState();
  const actualValue = chartData
    ? chartData[chartData.length - 1].y.toLocaleString().split(".")[0]
    : "?";

  useEffect(() => {
    const period1 = "200-02-01";
    const period2 = "2021-08-04";

    const fechtData = async () => {
      const data = await getData(props.symbol, period1, period2);

      const arrayDatos = [data][0].data;

      const y = arrayDatos.map((item) => item.open);
      const x = arrayDatos.map((item) => item.date.split("T")[0]);
      const dca = dcaCalculator(props.amount, y, x);
      setChartData(dca);
      console.log();
      return data;
    };

    fechtData();
  }, [props.symbol, props.amount]);

  const data = {
    labels,
    datasets: [
      {
        label: "Valor actual desde " + "$" + actualValue,
        data: chartData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointStyle: "circle",
        pointRadius: 0,
        pointHoverRadius: 10,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
