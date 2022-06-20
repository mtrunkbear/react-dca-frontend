import { useContext } from "react";
import { Form } from "../components/Form";
import { DataContext } from "../contexts/dataContext";
import { Chart } from "../components/Chart";
export default function DolarCostAverage() {
    
  const { contextData } = useContext(DataContext);
  const value = parseInt(contextData.value).toLocaleString('en-US', { 
    style: "currency", 
    currency: "USD"
  })

    return (
        <div className="app-content">
           <div className="subtitle">
      <p>Con un ahorro de {value} dolares al mes:</p>
    </div>
       

        <div className="panel">
        <Form type={'dca'} />
      
          <div className="chart-container">
            
            <Chart
              symbol={contextData.symbol}
              amount={contextData.value}
              period1={contextData.period1}
              period2={contextData.period2}
              interval={contextData.interval}
              type={'dca'}
            />
          </div>
        </div>
      </div>
    );
  }