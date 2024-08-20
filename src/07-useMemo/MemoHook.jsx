import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const test = (initValue = 100) => {
  for (let i = 0; i < initValue; i++) {
    console.log("Ahi vamos...");
  }

  return `Iteraciones realizadas: ${initValue}`;
};

const MemoHook = () => {
  const { count, increment } = useCounter(1);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => test(count), [count]);

  return (
    <>
      <h1>
        Counter: <small>{count}</small>
      </h1>
      <hr />

      <h5>{memorizedValue}</h5>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
