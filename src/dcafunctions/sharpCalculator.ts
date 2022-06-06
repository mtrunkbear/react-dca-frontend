import * as Statistics from "./statisticsCalculator";

export const sharpCalculator = (prices: any, date: any) => {
  let returns = [];

  for (let i = 0; i < prices.length; i++) {
    returns[i] = (prices[i] - prices[i - 1]) / prices[i - 1];
  }




  const averageReturns = Statistics.movilAverage(returns.slice(1,returns.length));
  const averageVariance = Statistics.movilVariance(returns.slice(1,returns.length));

  let data = [];
  for (let i = 0; i < returns.length; i++) {
    data[i] = { x: date[i], y: (averageReturns[i-2] / Math.sqrt(averageVariance[i-2])) };
  }
  console.log(data)
  return data;
};
