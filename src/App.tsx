import "./App.css";


import { useContext } from "react";

import { DataContext } from "./contexts/dataContext";
import { Form } from "./components/Form";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ruta from "./routes/SharpRatio";
import DolarCostAverage from "./routes/DolarCostAverage";

function App() {
  const { contextData } = useContext(DataContext);
  const Header = () => {
    return (
      <header className="app-header">
        <div className="title">
          <h1> Dolar Cost Average</h1>
        </div>
       
      
      </header>
    );
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <nav className="navbar">
          <ul><li>
            <Link to="/">Dolar Cost Average</Link>
          </li>
          <li>
            <Link to="/SharpRatio">Sharp Ratio</Link>
          </li></ul>
          
        </nav>
        <div className="subtitle">
          <p>Con un ahorro de $ {contextData.value} dolares al mes:</p>
        </div>

        <div className="main">
          <Routes>
          <Route
            path="/"
            element={<DolarCostAverage/>}
          />

          <Route path="/ruta" element={<Ruta />} />
        </Routes></div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
