export const mean = (array: any) =>{
  const mean = array.reduce((a: number, b: number) => a + b) / array.length;
  return mean}

export const movilAverage = (value: any) => {
  let averages = [];
  for (let i = 0; i < value.length; i++) {
    averages[i] = mean(value.slice(i, i + 12));
  }
  return averages.slice(0,averages.length-1);
};

export const variance = (array: any) => {
  let variance = [];
  for (let i = 0; i < array.length; i++) {
    variance[i] = Math.pow(array[i] - mean(array), 2);
  }
  return mean(variance);
};


export const movilVariance = (value: any) => {
  let averages = [];
  for (let i = 0; i < value.length; i++) {
    averages[i] = variance(value.slice(i, i +12));
  }
  return averages.slice(0,averages.length-1);
};
