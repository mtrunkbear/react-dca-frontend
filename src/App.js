import logo from "./logo.svg";
import "./App.css";
import { Chart } from "./components/Chart";
import SelectAsset from "./components/SelectAsset";
import { useEffect, useState } from "react";

function App() {
  const [asset, setAsset] = useState('BTC-USD');
  const [value,setValue] = useState(100)
  useEffect(() => {
   
   console.log(value)
  },[asset,value]);
  return (
    <div className="App">
      <h1> Dolar Cost Average</h1>
      <header className="App-header">
        <p>Esto es DCA de 100 dolares al mes:</p>
        <SelectAsset  setAsset={opt=> setAsset(opt.value)} />
        <form><input value={value}onChange={e=>setValue(e.target.value)}/></form>
        <div className="Chart-container">
          <Chart symbol={asset} amount={value} />
        </div>
      </header>
    </div>
  );
}

export default App;
