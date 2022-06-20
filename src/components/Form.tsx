import { useContext, useState } from "react";
import SelectAsset from "./SelectAsset";
import { DataContext } from "../contexts/dataContext";

export const Form = (props: any) => {
  const { contextData, setContextData } = useContext(DataContext);

  const [formData, setFormData] = useState({
    symbol: contextData.symbol,
    interval: contextData.interval,
    value: contextData.value,
    period1: contextData.period1,
    period2: contextData.period2,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setContextData({ ...formData });
  };

  return (
    <form className="form">
      <div className="form-row">
        <label>
          <span> Instrumento:</span>
          <div className="select">
            <SelectAsset
              setAsset={(opt: any) =>
                setFormData({ ...formData, symbol: opt.value as any })
              }
              type={"instrument"}
            />
          </div>
        </label>
      </div>
      <div className="form-row">
        <label>
          <span> Intervalo:</span>
          <div className="select">
            <SelectAsset
              setInterval={(opt: any) =>
                setFormData({ ...formData, interval: opt.value as any })
              }
            />
          </div>
        </label>
      </div>
      {props.type === "dca" ? (
        <div className="form-row">
          <label>
            <span> Monto:</span>
            <input
              value={formData.value}
              onChange={(e) => {
                setFormData({ ...formData, value: e.target.value as any });
              }}
            />
          </label>
        </div>
      ) : null}

      <div className="form-row">
        <label>
          <span> Desde:</span>
          <input
            type="date"
            value={formData.period1}
            onChange={(e) =>
              setFormData({ ...formData, period1: e.target.value })
            }
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span> Hasta:</span>
          <input
            type="date"
            value={formData.period2}
            onChange={(e) =>
              setFormData({ ...formData, period2: e.target.value })
            }
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          <button className="form-button" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </label>
      </div>
    </form>
  );
};
