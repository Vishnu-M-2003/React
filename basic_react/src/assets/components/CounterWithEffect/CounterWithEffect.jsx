import { useState, useEffect } from "react";

export default function CounterWithEffect() {
  let [counter, setCounter] = useState(0);

  let changeCounter = () => {
    setCounter((currValue) => currValue + 1);
  };

  useEffect(() => {
    console.log("Hello");
  });

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={changeCounter}>Click</button>
    </div>
  );
}
