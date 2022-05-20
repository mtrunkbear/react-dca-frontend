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
  scales:{
    x: {
      ticks:{
        color:'white',
        font:{ size: 12} 
      }
    },
    y: {
      ticks:{
        color:'white',
        font:{ size: 12} 
      }
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels:{
        font:{ size:15}
      }
    },
    title: {
      display: true,
      text: "Valor acumulado en Dolares",
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
    const period1 = props.period1;
    const period2 = props.period2;

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
  }, [props.symbol, props.amount,props.period1,props.period2]);

  const data = {
    labels,
    datasets: [
      {
        label: "Valor actual desde " + "$" + actualValue,
        data: chartData,
        borderColor: "rgb(0, 255, 0)",
        backgroundColor: "rgba(0, 99, 0, 0.5)",
        pointStyle: "circle",
        pointRadius: 0,
        pointHoverRadius: 10,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
