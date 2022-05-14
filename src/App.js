import logo from "./logo.svg";
import "./App.css";
import { Chart } from "./components/chart";

function App() {
  return (
    <div className="App">
      <h1> Prueba</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<div className="Chart-container"><Chart /></div>
        
      </header>
    </div>
  );
}

export default App;
