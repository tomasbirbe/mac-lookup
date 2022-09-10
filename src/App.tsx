import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((resp) => resp.json())
      .then((a) => console.log(a));
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Prueba</button>
    </div>
  );
}

export default App;
