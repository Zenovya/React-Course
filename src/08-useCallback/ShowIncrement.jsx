import {memo} from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volví a generar :(");

  return (
    <button className="btn btn-sm btn-outline-success" onClick={increment}>
      increment
    </button>
  );
});

