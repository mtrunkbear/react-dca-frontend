import logo from './logo.svg';
import './App.css';
import { getData } from './api/getData';
import { useState } from 'react';

function App() {

  useState(async ()=>{

    const symbol = 'TSLA'
    const period1 = '2010-02-01'
    
    const period2 = '2021-02-01'

  const datos = await getData(symbol,period1,period2);
  console.log(datos)

  const arrayDatos = [datos]
 console.log(arrayDatos[0].data.map((item)=>item.open));


 
  })


  return (
    <div className="App">
      <h1> Prueba</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
    </div>
  );
}

export default App;
