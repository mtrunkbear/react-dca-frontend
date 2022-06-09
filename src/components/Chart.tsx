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
import { sharpCalculator } from "../dcafunctions/sharpCalculator";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = (props: any) => {
  const options = {
    scales: {
      x: {
        ticks: {
          color: "white",
          font: { size: 12 },
        },
      },
      y: {
        ticks: {
          color: "white",
          font: { size: 12 },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 15 },
        },
      },
      title: {
        display: true,
        text:
          props.type == "dca"
            ? "Valor acumulado en Dolares del instrumento"
            : "Ratio de Sharp Del Instrumento",
      },
    },
  };

  const [chartData, setChartData] = useState<any>([{ x: NaN, y: "?" }] as any);
  const actualValue = props.type=='dca'?  "$" + chartData[chartData.length - 1].y
    .toLocaleString()
    .split(".")[0] :chartData[chartData.length - 1].y.toString().slice(0,5)
  useEffect(() => {
    const period1 = props.period1;
    const period2 = props.period2;
    const symbol = props.symbol;

    const fechtData = async () => {
      const dataSerie = await getData(symbol, period1, period2);

      const arrayDatos = [dataSerie][0].data;
      
      const prices = arrayDatos.map((item: any) => item.close);
      const date = arrayDatos.map((item: any) => item.date.split("T")[0]);
      const dca = dcaCalculator(props.amount, prices, date);
      const sharp = sharpCalculator(prices, date, 12);
      
      {
        props.type == "dca" ? setChartData(dca) : setChartData(sharp);
      }
      
    };

    fechtData();
  }, [props.symbol, props.amount, props.period1, props.period2, props.type]);
  const labels = chartData.x;
  const data = {
    labels,
    datasets: [
      {
        label: props.symbol + " " +  actualValue.toString(),
        data: chartData,
        borderColor: "rgb(0, 255, 0)",
        backgroundColor: "rgba(0, 99, 0, 0.5)",
        pointStyle: "circle",
        pointRadius: 1.5,
        pointHoverRadius: 10,
      },
    ],
  };

  return <Line options={options as any} data={data} />;
};
