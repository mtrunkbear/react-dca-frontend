import Select from "react-select";
const assets = [
  { label: "BTC", value: "BTC-USD" },
  { label: "ETH", value: "ETH-USD" },
  { label: "USDT", value: "USDT-USD" },
  { label: "SOL", value: "SOL-USD" },
  { label: "TSLA", value: "TSLA" },
  { label: "META", value: "FB" },
  { label: "DOT", value: "DOT-USD" },
  { label: "S&P 500", value: "^GSPC" },
  { label: "APPLE", value: "AAPL" },
];

const SelectAsset = ({ setAsset }: any) => {
  return <Select options={assets} onChange={setAsset} styles={colourStyles} />;
};

export default SelectAsset;

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "white",
    color: "rgb(0, 30, 0)",
    height: "30px",
    width: "103%",
    fontSize: "20px",
  }),
  option: (styles: any) => {
    return {
      ...styles,
      backgroundColor: "white",
      color: "rgb(0, 30, 0)",
      fontSize: "20px",
    };
  },
};
