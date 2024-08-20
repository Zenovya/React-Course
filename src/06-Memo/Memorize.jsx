import { useState } from "react";
import { useCounter } from "../hooks";
import {Small} from "./Small";

const Memorize = () => {
  const { count, increment } = useCounter(1);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={count} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button className="btn btn-outline-primary" onClick={() => {
        setShow(!show);
      }}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default Memorize;
