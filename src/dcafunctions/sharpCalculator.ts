import * as Statistics from "./statisticsCalculator";

export const sharpCalculator = (prices: any, date: any, periods: any) => {
  let returns = [];

  for (let i = 0; i < prices.length; i++) {
    returns[i] = (prices[i] - prices[i - 1]) / prices[i - 1];
  }

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
    data[i] = { x: date[i], y: averageReturns[i-2] / averageStdev[i-2] };
    
  }
  
  return data;
};
