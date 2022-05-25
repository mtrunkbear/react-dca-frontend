
export const dcaCalculator = (savings, prices, date) => {
  const quantity = prices.map((item) => savings / item);
  const cumulativeQuantity = quantity.map(
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  );

  const dca = cumulativeQuantity.map(function (e, i) {
    return e * prices[i];
  });

  let data = [];
  for (let i = 0; i < dca.length; i++) {
    data[i] = { x: date[i], y: dca[i] };
  }
  return data;
};
