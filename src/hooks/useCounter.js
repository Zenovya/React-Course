import { useState } from "react";

export const useCounter = (initialValue = 10, incrementValue = 1) => {
  //[object Object] === obj.toString()

  
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + incrementValue);
  const decrement = () => {
    if (count - incrementValue > 0) setCount(count - incrementValue);
  };
  const reset = () => setCount(initialValue);

  //   const [count, setCount] = useState(initialValue);
  //   const increment = (value = 1) => setCount(count + value);
  //   const decrement = (value = 1) => {
  //     if (count > 0 && count - value >= 0) setCount(count - value);
  //   };
  //   const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
};
