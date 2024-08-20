import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    const OnMouseMove = (e) => {
      console.log("Hey");
    };

    window.addEventListener("mousemove", OnMouseMove);
    return () => {
      window.removeEventListener("mousemove", OnMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};

export default Message;
