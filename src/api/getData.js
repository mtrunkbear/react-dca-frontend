import axios from "axios";

const options = {
  method: "GET",
  url: "http://localhost:4000/api/data/TSLA",
};

export const getData = async (symbol, period1, period2) => {
  // const response = await axios.request(options)
  const response = await axios.get("http://localhost:4000/api/data/" + symbol, {
    params: { period1: period1, period2: period2, interval: "1mo" },
  });
  //const response = await axios.get('http://localhost:4000/api/data/'+symbol);

  return response;
};
