import { useState } from "react";

const CounterApp = () => {
//   const [counter, setCounter] = useState(10);

//   const [{ counter1, counter2, counter3 }, setCounter] = useState({
//     counter1: 10,
//     counter2: 20,
//     counter3: 30,
//   });

  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

//   const handleClick = () => {
//     setCounter({
//         counter1: counter1 + 1,
//         counter2: counter2,
//         counter3: counter3,
//     });
//   };

  const handleClick = () => {
    setCounter({
        ...counter,
        counter1: counter1 + 1,
    });
  };

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      <button className="btn btn-sm btn-success" onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default CounterApp;
