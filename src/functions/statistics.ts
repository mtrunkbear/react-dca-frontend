export const mean = (array: any) => {
  const mean =
    array.reduce((a: number, b: number) => a + b, null) / array.length;

  return mean;
};
export const toPercent = (array: any) => {
  let data = [];
  for (let i = 0; i < array.length; i++) {
    data[i] = array[i] * 100;
  }
  return data;
};

export const variance = (array: any) => {
  let variance = [];
  for (let i = 0; i < array.length; i++) {
    variance[i] = Math.pow(array[i] - mean(array), 2);
  }

  return mean(variance);
};

export const stdev = (array: any) => {
  return Math.pow(variance(array), 1 / 2);
};

export const movilStatistic = (value: any, periods: any, statistic: any) => {
  let averageStatistic = [];
  for (let i = 0; i < value.length; i++) {
    averageStatistic[i] = statistic(value.slice(i - periods + 1, i));
  }
  return averageStatistic.slice(0, averageStatistic.length - 1);
};

export const movilAverage = (value: any, periods: any) => {
  const returns = movilStatistic(value, periods, mean);

  return returns;
};

export const movilVariance = (value: any, periods: any) => {
  return movilStatistic(value, periods, variance);
};

export const movilStdev = (value: any, periods: any) => {
  return movilStatistic(value, periods, stdev);
};
