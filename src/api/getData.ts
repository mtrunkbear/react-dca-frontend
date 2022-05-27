import axios from "axios";

export const getData = async (symbol: any, period1: any, period2: any) => {
  const response = await axios.get("http://localhost:4000/api/data/" + symbol, {
    params: { period1: period1, period2: period2, interval: "1mo" },
  });

  return response;
};
