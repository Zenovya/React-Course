import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1 className="">Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef } 
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />

      <button className="btn btn-sm mt-2 btn-primary" onClick={onClick}>
        setFocus
      </button>
    </>
  );
};

export default FocusScreen;
