import {  useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Lovo",
    email: "jlovo@fztedu.org",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // ! Usado para efectos secundarios
  // ! Crear useEffect cuantos se necesiten para eventos específicos en el componente
//   useEffect(() => {
//     console.log("Hey");
//   }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <div className="row col">
        <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
          <input
            type="text"
            value={username}
            className="form-control"
            placeholder="Username"
            name="username"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
          <input
            type="email"
            value={email}
            className="form-control"
            placeholder="jlovo@fztedu.org"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        {username === "Lovo" && <Message />}
      </div>
    </>
  );
};

export default SimpleForm;
