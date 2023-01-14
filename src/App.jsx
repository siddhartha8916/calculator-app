import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Screen from "./components/Screen";
import Button from "./components/Button";

function App() {
  const [buttons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "="]);
  const [calculations] = useState(["+", "-", "/", "x"]);

  const [text, setText] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const [op, setOp] = useState("");

  const setValue = (e) => {
    setText((prevText) => prevText + e.target.innerHTML);
  };

  const setOperation = (e) => {
    setOp(e.target.innerHTML);
    setNum1(Number(text));
    setText("");
  };

  const calculateResult = () => {
    switch (op) {
      case '+':
        setResult(num1+Number(text));
        break;
      case '-':
        setResult(num1-Number(text));
        break;
      case '/':
        setResult(num1/Number(text));
        break;
      case 'x':
        setResult(num1*Number(text));
        break;
    
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <Screen value={text} operation={op} num1={num1} num2={num2} result={result} />
        <div className="buttons">
          {buttons.map((btn) => (
            <Button key={btn} text={btn} onClick={setValue} calculateResult={calculateResult} result={result}/>
          ))}
        </div>
        <div className="calculations-buttons">
          {calculations.map((btn) => (
            <Button key={btn} text={btn} setOp={setOp} onClick={setOperation} result={result}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
