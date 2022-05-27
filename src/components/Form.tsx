import  { useContext } from "react";
import SelectAsset from "./SelectAsset";
import {DataContext} from '../contexts/dataContext';


export const Form = ()=>{
    const {contextData, setContextData} = useContext(DataContext);


    return (
        <form className="options">
          <div className="form-row">
            <label>
              <span> Instrumento:</span>
              <div className="select">
                <SelectAsset setAsset={(opt: any) => setContextData({...contextData, symbol: opt.value as any})} />
              </div>
            </label>
          </div>
          <div className="form-row">
            <label>
              <span> Monto:</span>
              <input
                value={contextData.value}
                onChange={(e) => setContextData({...contextData, value : e.target.value as any})}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span> Desde:</span>
              <input
                type="date"
                value={contextData.period1}
                onChange={(e) => setContextData({...contextData, period1: e.target.value})}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span> Hasta:</span>
              <input
                type="date"
                value={contextData.period2}
                onChange={(e) => setContextData({...contextData, period2:e.target.value})}
              />
            </label>
          </div>
        </form>
    )
}