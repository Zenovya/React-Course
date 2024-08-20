import { useCallback, useState } from "react";
import {ShowIncrement} from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {1
    setCounter((c) => c + 1);
  }, []);

  return (
    <>
      <h1>UseCallback Hook: {counter}</h1>

      <ShowIncrement increment={increment} />
    </>
  );
};

export default CallbackHook;
