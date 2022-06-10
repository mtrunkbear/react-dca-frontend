import { useContext } from "react";
import { Chart } from "../components/Chart";
import { Form } from "../components/Form";
import { DataContext } from "../contexts/dataContext";

export default function SharpeRatio() {
  const { contextData } = useContext(DataContext);
  return (
    <div className="app-content">
      <div className="panel">
        <Form type={"sharpe"} />
        <div className="chart-container">
          <Chart
            symbol={contextData.symbol}
            amount={contextData.value}
            period1={contextData.period1}
            period2={contextData.period2}
            type={"sharpe"}
          />
        </div>
      </div>
    </div>
  );
}
