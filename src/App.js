import logo from "./logo.svg";
import "./App.css";
import { Chart } from "./components/Chart";
import SelectAsset from "./components/SelectAsset";
import { useEffect, useState } from "react";

function App() {
  const [asset, setAsset] = useState('BTC-USD');
  useEffect(() => {
   setAsset();
  },[asset]);
  return (
    <div className="App">
      <h1> Dolar Cost Average</h1>
      <header className="App-header">
        <p>Esto es DCA de 100 dolares al mes:</p>
        <SelectAsset  setAsset={opt=> setAsset(opt.value)} />
        <div className="Chart-container">
          <Chart symbol={asset} />
        </div>
      </header>
    </div>
  );
}

export default App;
