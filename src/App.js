import logo from "./logo.svg";
import "./App.css";
import { Chart } from "./components/chart";

function App() {
  return (
    <div className="App">
      <h1> Dolar Cost Average</h1>
      <header className="App-header">
        <p>Esto es DCA de 100 dolares al mes:</p>

        <div className="Chart-container">
          <Chart />
        </div>
      </header>
    </div>
  );
}

export default App;
