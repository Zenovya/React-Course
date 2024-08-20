import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(2, 3);

  return (
    <>
      <h1>Counter With Custom Hook: {count} </h1>
      <hr />

      <button className="btn btn-md btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-md btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-md btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
