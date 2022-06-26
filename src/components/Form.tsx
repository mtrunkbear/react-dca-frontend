import { useContext } from "react";
import SelectAsset from "./SelectAsset";
import { DataContext } from "../contexts/dataContext";

export const Form = (props: any) => {
  const { contextData, setContextData } = useContext(DataContext);

  return (
    <form className="form">
      <div className="form-row">
        <label>
          <span> Instrument:</span>
          <div className="select">
            <SelectAsset
              setAsset={(opt: any) =>
                setContextData({ ...contextData, symbol: opt.value as any })
              }
              type={"instrument"}
            />
          </div>
        </label>
      </div>
      <div className="form-row">
        <label>
          <span> Interval:</span>
          <div className="select">
            <SelectAsset
              setInterval={(opt: any) =>
                setContextData({ ...contextData, interval: opt.value as any })
              }
            />
          </div>
        </label>
      </div>
      {props.type === "dca" ? (
        <div className="form-row">
          <label>
            <span> Amount:</span>
            <input
              value={contextData.value}
              onChange={(e) => {
                setContextData({
                  ...contextData,
                  value: e.target.value as any,
                });
              }}
            />
          </label>
        </div>
      ) : null}

      <div className="form-row">
        <label>
          <span> From:</span>
          <input
            type="date"
            min="1970-01-01"
            max="2025-01-01"
            value={contextData.period1}
            onChange={(e) =>
              setContextData({ ...contextData, period1: e.target.value })
            }
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span> To:</span>
          <input
            type="date"
            min="1970-01-01"
            max="2025-01-01"
            value={contextData.period2}
            onChange={(e) =>
              setContextData({ ...contextData, period2: e.target.value })
            }
          />
        </label>
      </div>
    </form>
  );
};
