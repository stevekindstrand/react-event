import { useState } from "react";
import "./Addition.css";

export function Addition() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const firstChange = (e: any) => {
    setFirstNumber(parseInt(e.target.value));
  };

  const secondChange = (e: any) => {
    setSecondNumber(parseInt(e.target.value));
  };

  const calculate = () => {
    setResult(firstNumber + secondNumber);
  };

  return (
    <div>
      <input type="number" onChange={firstChange} value={firstNumber} />
      <span> + </span>
      <input type="number" onChange={secondChange} value={secondNumber} />
      <button onClick={calculate}> = </button>
      <span>  {result}</span>
    </div>
  );
}
