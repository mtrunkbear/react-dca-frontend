export const dcaCalculator = (savings: any, prices: any, date: any) => {
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

  let data = [];
  for (let i = 0; i < dca.length; i++) {
    data[i] = { x: date[i], y: dca[i] };
  }
  return data;
};
