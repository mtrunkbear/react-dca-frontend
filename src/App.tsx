import "./App.css";
import { Chart } from "./components/Chart";

import { useContext } from "react";

import { DataContext } from "./contexts/dataContext";
import { Form } from "./components/Form";

function App() {
  const { contextData } = useContext(DataContext);

  const Header = () => {
    return (
      <header className="app-header">
        <div className="title">
          <h1> Dolar Cost Average</h1>
        </div>
        <div className="subtitle">
          <p>Con un ahorro de $ {contextData.value} dolares al mes:</p>
        </div>
      </header>
    );
  };

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Form />

        <div className="panel">
          <div className="chart-container">
            <Chart
              symbol={contextData.symbol}
              amount={contextData.value}
              period1={contextData.period1}
              period2={contextData.period2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
