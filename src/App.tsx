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
  const [isMenu, setIsMenu] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 700) {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  }, [size.width]);

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
        <nav
          className="navbar"
          style={
            window.innerWidth < 700
              ? isMenu
                ? {
                    display: "absolute",
                    zIndex: "1",
                    marginBottom: "-15%",
                    opacity: "0.95",
                  }
                : { height: "5%" }
              : {}
          }
        >
          <i
            className="fa-solid fa-xmark"
            style={
              window.innerWidth < 700 ? (isMenu ? {} : { display: "none" }) : {}
            }
            onClick={() => setIsMenu(false)}
          />
          <i
            className="fa-solid fa-bars"
            style={
              window.innerWidth < 700 ? (isMenu ? { display: "none" } : {}) : {}
            }
            onClick={() => setIsMenu(true)}
          ></i>
          <ul
            style={
              window.innerWidth < 700 ? (isMenu ? {} : { display: "none" }) : {}
            }
          >
            <li>
              <Link to="/">Dolar Cost Average</Link>
            </li>
            <li>
              <Link to="/SharpeRatio">Sharp Ratio</Link>
            </li>
            <li>
              <Link to="/Prices">Prices</Link>
            </li>
            <li>
              <Link to="/PriceReturns">Price Returns</Link>
            </li>
          </ul>
        </nav>

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
