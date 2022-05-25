import "./App.css";
import { Chart } from "./components/Chart";
import SelectAsset from "./components/SelectAsset";
import { useEffect, useState } from "react";

function App() {
  const [asset, setAsset] = useState("BTC-USD");
  const [value, setValue] = useState(100);
  const [period1, setPeriod1] = useState("2010-02-01");
  const [period2, setPeriod2] = useState("2022-02-01");
  useEffect(() => {
    console.log(period1, period2);
  }, [asset, value, period1, period2]);
  return (
    <div className="app">
      <header className="app-header">
        <div className="title">
          <h1> Dolar Cost Average</h1>
        </div>
        <div className="subtitle"><p>Esto es DCA de {value} dolares al mes:</p></div>
        
      </header>
      <div className="app-content">
        <form className="options">
          <div className="form-row">
            <label>
              <span> Instrumento:</span>
              <div className="select">
                <SelectAsset setAsset={(opt) => setAsset(opt.value)} />
              </div>
            </label>
          </div>
          <div className="form-row">
            <label>
              <span> Monto:</span>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span> Desde:</span>
              <input
                type="date"
                value={period1}
                onChange={(e) => setPeriod1(e.target.value)}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span> Hasta:</span>
              <input
                type="date"
                value={period2}
                onChange={(e) => setPeriod2(e.target.value)}
              />
            </label>
          </div>
        </form>


<div className="panel">
<div className="chart-container">

<Chart
  symbol={asset}
  amount={value}
  period1={period1}
  period2={period2}
/>
</div>
</div>
        
      </div>
    </div>
  );
}

export default App;
