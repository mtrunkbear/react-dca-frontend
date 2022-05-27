import { createContext, useState } from "react";

export const DataContext = createContext({} as any);

export const DataContextProvider = (props: any) => {
  const [contextData, setContextData] = useState({
    symbol: "BTC-USD",
    value: 100,
    period1: "2010-02-01",
    period2: "2022-02-01",
  });

  const value = { contextData, setContextData };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
