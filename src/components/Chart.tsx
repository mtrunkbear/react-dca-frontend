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
  Filler,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

import { getData } from "../api/getData";
import { useState, useEffect } from "react";
import { dcaCalculator } from "../dcafunctions/dcaCalculator";
import { sharpeCalculator } from "../dcafunctions/sharpeCalculator";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

export const Chart = (props: any) => {
  const [chartData, setChartData] = useState<any>([{ x: NaN, y: "?" }] as any);

  const valueWithDca =
    "$" + chartData[chartData.length - 1].y.toLocaleString().split(".")[0];
  const valueWhitoutDca = chartData[chartData.length - 1].y
    .toString()
    .slice(0, 5);
  const actualValue = props.type === "dca" ? valueWithDca : valueWhitoutDca;

  const [symbol, setSymbol] = useState(props.symbol);

  const options = {
    animation: true,
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
          props.type === "dca"
            ? "Valor acumulado en Dolares del instrumento"
            : "Ratio de Sharp Del Instrumento",
      },

      zoom: {
        zoom: {
          drag: {
            enabled: true,
            backgroundColor: "rgba(150,180,0,0.3)",
          },
          wheel: {
            enabled: true,
          },

          mode: "x",
        },
      },
    },
  };

  useEffect(() => {
    const period1 = props.period1;
    const period2 = props.period2;
    const symbol = props.symbol;
    const interval = props.interval;
    const periods =
      props.interval === "1d"
        ? 7
        : props.interval === "1wk"
        ? 4
        : props.interval === "1mo"
        ? 12
        : null;

    const fechtData = async () => {
      const dataSerie = await getData(symbol, period1, period2, interval);
      const arrayDatos = [dataSerie][0].data;
      const prices = arrayDatos.map((item: any) => item.close);
      const date = arrayDatos.map((item: any) => item.date.split("T")[0]);

      if (props.type === "dca") {
        const dca = dcaCalculator(props.amount, prices, date);
        setChartData(dca);
      } else {
        const sharp = sharpeCalculator(prices, date, periods);
        setChartData(sharp);
      }
      setSymbol(symbol);
    };

    fechtData();

    console.log(chartData);
  }, [props]);

  const labels = chartData.map((item: any) => item.x);
  const data = {
    labels,
    datasets: [
      {
        label: symbol + " " + actualValue.toString(),
        data: chartData,
        fill: props.type === "dca" ? true : false,
        borderColor: "rgb(0, 255, 0)",
        backgroundColor: "rgba(0, 99, 0, 1)",
        pointStyle: "circle",
        pointRadius: 1,
        pointHoverRadius: 10,
        tension: 0.2,
      },
    ],
  };

  return <Line options={options as any} data={data} />;
};
