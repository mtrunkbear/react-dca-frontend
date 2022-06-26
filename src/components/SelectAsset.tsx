import Select from "react-select";
const assets = [
  { label: "Bitcoin (BTC)", value: "BTC-USD" },
  { label: "Ethereum (ETH)", value: "ETH-USD" },
  { label: "Tether (USDT)", value: "USDT-USD" },
  { label: "USD Coin (USDC)", value: "USDC-USD" },
  { label: "Solana (SOL)", value: "SOL-USD" },
  { label: "Cardano (ADA)", value: "ADA-USD" },
  { label: "Binance Coin", value: "BNB-USD" },
  { label: "Polkadot (DOT)", value: "DOT-USD" },
  { label: "META", value: "FB" },
  { label: "Tesla (TSLA)", value: "TSLA" },
  { label: "S&P 500", value: "^GSPC" },
  { label: "Apple (AAPL)", value: "AAPL" },
  { label: "Advanced MicroDevices (AMD)", value: "AMD" },
  { label: "Amazon (AMZN)", value: "AMZN" },
  { label: "Nvidia (NVDA)", value: "NVDA" },
];

const interval = [
  { label: "Diario", value: "1d" },
  { label: "Semanal", value: "1wk" },
  { label: "Mensual", value: "1mo" },
];

const SelectAsset = ({ setAsset, setInterval, type }: any) => {
  return type === "instrument" ? (
    <Select options={assets} onChange={setAsset} styles={colourStyles} />
  ) : (
    <Select options={interval} onChange={setInterval} styles={colourStyles} />
  );
};

export default SelectAsset;

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "white",
    color: "rgb(0, 30, 0)",
    minHeight: "10px",
    maxHeight: "36px",
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
