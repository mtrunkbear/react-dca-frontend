import React from "react";
import Select from "react-select";

const assets = [
  { label: "BTC", value: "BTC-USD" },
  { label: "ETH", value: "ETH-USD" },
  { label: "USDT", value: "USDT-USD" },
  { label: "SOL", value: "SOL-USD" },
  { label: "TSLA", value: "TSLA" },
  { label: "META", value: "FB" },
  { label: "DOT", value: "DOT-USD" },
];

const SelectAsset = ({ setAsset }) => {
  return <Select options={assets} onChange={setAsset} />;
};

export default SelectAsset;
