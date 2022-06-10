import { useContext } from "react";
import { Form } from "../components/Form";
import { DataContext } from "../contexts/dataContext";
import { Chart } from "../components/Chart";
export default function DolarCostAverage() {
    
  const { contextData } = useContext(DataContext);

    return (
        <div className="app-content">
           <div className="subtitle">
      <p>Con un ahorro de $ {contextData.value} dolares al mes:</p>
    </div>
       

        <div className="panel">
        <Form type={'dca'} />
      
          <div className="chart-container">
            
            <Chart
              symbol={contextData.symbol}
              amount={contextData.value}
              period1={contextData.period1}
              period2={contextData.period2}
              type={'dca'}
            />
          </div>
        </div>
      </div>
    );
  }