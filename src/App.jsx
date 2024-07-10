import ColorGenerator from "./colorGenerator";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <div className="components">
        <ColorGenerator />
        <ColorGenerator />
        <ColorGenerator />
        <ColorGenerator />
        <ColorGenerator />
        <ColorGenerator />
        <ColorGenerator />
        <ColorGenerator />
      </div>
    </div>
  );
}

export default App;
