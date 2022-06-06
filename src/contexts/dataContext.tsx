import { createContext, useState } from "react";

export const DataContext = createContext({} as any);

var today = new Date();

const todayYear =  today.getFullYear()
const todayMonth = today.getMonth()+1 >=10 ? today.getMonth()+1 : '0'+ (today.getMonth()+1) 
const todayDay = today.getDate()>=10?today.getDate(): '0'+(today.getDate())
 const todayDate = todayYear +'-'+ todayMonth +'-'+todayDay



export const DataContextProvider = (props: any) => {
  const [contextData, setContextData] = useState({
    symbol: "BTC-USD",
    value: 100,
    period1: "2010-02-01",
    period2: todayDate,
  });

  const value = { contextData, setContextData };
  console.log(todayDate)

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
