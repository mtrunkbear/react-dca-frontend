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
import * as Finance from "../functions/finance";
import { formatReturnData } from "../functions/dataManipulation";

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

  const [symbol, setSymbol] = useState(props.symbol);

  const valuePeriod2 = chartData[chartData.length - 1].y;
  const valueWithPrice = "$" + valuePeriod2.toLocaleString().split(".")[0];

  const valueWhitoutPrice = valuePeriod2.toString().slice(0, 5);

  const actualValue =
    props.type === "dca" || props.type === "prices"
      ? valueWithPrice
      : valueWhitoutPrice;
  const titleText =
    props.type === "dca"
      ? "Accumulated value of the instrument (in dollars):"
      : props.type === "sharpe"
      ? "Instrument Sharpe Ratio:"
      : props.type === "prices"
      ? "Instrument Price Chart:"
      : "Instrument Returns by Period:";

  const animation = chartData?.length > 1000 ? false : true;

  const options = {
    interaction: { mode: "nearest", intersect: false },
    maintainAspectRatio: false,
    animation: animation,
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
        text: titleText,
        padding: {
          top: 20,
          bottom: 5,
        },
      },

      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          modifierKey: "ctrl",
        },
        zoom: {
          drag: {
            enabled: true,
            backgroundColor: "rgba(150,180,0,0.3)",
          },
          wheel: {
            enabled: true,
          },
          pinch: {
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
        const dca = Finance.dolarCostAverage(props.amount, prices, date);
        setChartData(dca);
      } else if (props.type === "sharpe") {
        const sharp = Finance.sharpeRollingRatio(prices, date, periods);
        setChartData(sharp);
      } else if (props.type === "priceReturns") {
        const priceReturns = Finance.priceReturns({
          date: date,
          prices: prices,
        });
        setChartData(priceReturns);
      } else {
        const pricesFormated = formatReturnData({ x: date, y: prices });
        setChartData(pricesFormated);
      }

      setSymbol(symbol);
    };

    fechtData();
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
