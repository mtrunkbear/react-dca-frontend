import axios from "axios";

export const getData = async (
  symbol: any,
  period1: any,
  period2: any,
  interval: any
) => {
  const response = await axios.get("http://localhost:4000/api/data/" + symbol, {
    params: { period1: period1, period2: period2, interval: interval },
  });

  return response;
};
