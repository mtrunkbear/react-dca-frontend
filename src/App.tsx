import "./App.css";

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DolarCostAverage from "./routes/DolarCostAverage";
import SharpeRatio from "./routes/SharpeRatio";
import Prices from "./routes/Prices";
import PriceReturns from "./routes/PriceReturns";
import { useEffect, useState } from "react";
import useWindowSize from "./hooks/useWindowSize";

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
  const NavBar = () => {
    const [isMenu, setIsMenu] = useState(true);
    const size = useWindowSize();
  
    useEffect(() => {
      if (size.width > 700) {
        setIsMenu(true);
      } else {
        setIsMenu(false);
      }
    }, [size.width]);

    const navBarContainerStyle =
      window.innerWidth < 700
        ? isMenu
          ? {
              display: "absolute",
              zIndex: "1",
              marginBottom: "-15%",
              opacity: "0.95",
            }
          : { height: "5%" }
        : {};
    const xmarkStyle =
      window.innerWidth < 700 ? (isMenu ? {} : { display: "none" }) :  {display:'none'};
    const barsSyle =
      window.innerWidth < 700 ? (isMenu ? { display: "none" } : {}) : {display:'none'};
    const navBarUlStyle =
      window.innerWidth < 700 ? (isMenu ? {} : { display: "none" }) : {};

    return (
      <nav className="navbar" style={navBarContainerStyle}>
        <i
          className="fa-solid fa-xmark"
          style={xmarkStyle}
          onClick={() => setIsMenu(false)}
        />
        <i
          className="fa-solid fa-bars"
          style={barsSyle}
          onClick={() => setIsMenu(true)}
        ></i>
        <ul style={navBarUlStyle}>
          <li>
            <Link to="/" onClick={() => setIsMenu(false)}>
              Dolar Cost Average
            </Link>
          </li>
          <li>
            <Link to="/SharpeRatio" onClick={() => setIsMenu(false)}>
              Sharp Ratio
            </Link>
          </li>
          <li>
            <Link to="/Prices" onClick={() => setIsMenu(false)}>
              Prices
            </Link>
          </li>
          <li>
            <Link to="/PriceReturns" onClick={() => setIsMenu(false)}>
              Price Returns
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <NavBar />

        <div className="main">
          <Routes>
            <Route path="/" element={<DolarCostAverage />} />
            <Route path="/SharpeRatio" element={<SharpeRatio />} />
            <Route path="/Prices" element={<Prices />} />
            <Route path="/PriceReturns" element={<PriceReturns />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
