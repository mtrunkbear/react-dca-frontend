import { useContext } from "react";
import { Chart } from "../components/Chart";
import { Form } from "../components/Form";
import { DataContext } from "../contexts/dataContext";

export default function SharpRatio() {
  
  const { contextData } = useContext(DataContext);
    return (
      <div className="app-content">
      <Form />

      <div className="panel">
        <div className="chart-container">
        <Chart
              symbol={contextData.symbol}
              amount={contextData.value}
              period1={contextData.period1}
              period2={contextData.period2}
              type={'sharp'}
            />
         
        </div>
      </div>
    </div>
    );
  }