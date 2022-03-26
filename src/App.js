import { useState } from "react";
import "./App.css";
import axios from "axios";
import dice from "./images/icon-dice.svg";
import pattern from "./images/pattern-divider-desktop.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  const adviceGenerator = () => {
    axios.get(`https://api.adviceslip.com/advice`).then((res) => {
      setAdvice(res.data.slip.advice);
      setId(res.data.slip.id);
    });
  };
  return (
    <div className="outer-container">
      <div className="container">
        {id && <h2>ADVICE #{id}</h2>}
        <h1>{advice}</h1>
        <div className="patternDiv">
          <img src={pattern} alt="desktop" />
        </div>
        <button onClick={adviceGenerator}>
          <img src={dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default App;
