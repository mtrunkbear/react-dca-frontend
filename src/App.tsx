import "./App.css";

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DolarCostAverage from "./routes/DolarCostAverage";
import SharpeRatio from "./routes/SharpeRatio";

function App() {


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
          <ul>
            <li>
              <Link to="/">Dolar Cost Average</Link>
            </li>
            <li>
              <Link to="/SharpeRatio">Sharp Ratio</Link>
            </li>
          </ul>
        </nav>
     

        <div className="main">
          <Routes>
            <Route path="/" element={<DolarCostAverage />} />

            <Route path="/SharpeRatio" element={<SharpeRatio />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
