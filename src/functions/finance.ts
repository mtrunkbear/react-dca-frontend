import { formatReturnData } from "./dataManipulation";
import * as Statistics from "./statistics";

export const priceReturns = ({
  date,
  prices,
  mode,
}: {
  date?: any[];
  prices: any[];
  mode?: string;
}) => {
  let returns = [];

  for (let i = 0; i < prices.length; i++) {
    returns[i] = (prices[i] - prices[i - 1]) / prices[i - 1];
  }
  let modeReturns = [];
  if (mode === "percent") {
    modeReturns = Statistics.toPercent(returns);
  } else {
    modeReturns = returns;
  }

  if (date) {
    return formatReturnData({ x: date, y: modeReturns });
  } else {
    return modeReturns;
  }
};

export const dolarCostAverage = (savings: any, prices: any, date: any) => {
  const quantity = prices.map((item: any) => savings / item);

  const cumulativeQuantity = quantity.map(
    (
      (sum) => (value: any) =>
        (sum += value)
    )(0)
  );

  const dca = cumulativeQuantity.map(function (quantity: any, i: any) {
    return quantity * prices[i];
  });

  return formatReturnData({ x: date, y: dca });
};

export const sharpeRollingRatio = (prices: any, date: any, periods: any) => {
  const returns = priceReturns({ prices: prices });

  const averageReturns = Statistics.movilAverage(
    returns.slice(1, returns.length),
    periods
  );

  const averageStdev = Statistics.movilStdev(
    returns.slice(1, returns.length),
    periods
  );

  let data = [];
  for (let i = 0; i < returns.length; i++) {
    data[i] = { x: date[i], y: averageReturns[i - 2] / averageStdev[i - 2] };
  }
  console.log(averageReturns.slice(2, averageReturns.length + 2));
  return data;
};
