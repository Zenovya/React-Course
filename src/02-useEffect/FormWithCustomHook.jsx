// import Message from "./Message";
import { useForm } from "../hooks/useForm";

const FormWithCustomHook = () => {
  const { handleResetForm, handleInputChange, username, password, email } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  //   const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <div className="container">
        <div className="row col justify-content-center">
          <div className="col-sm-12 col-md-6 mb-2">
            <input
              type="text"
              value={username}
              className="form-control"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <input
              type="email"
              value={email}
              className="form-control"
              placeholder="jlovo@fztedu.org"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-12 mb-2">
            <input
              type="password"
              value={password}
              className="form-control"
              placeholder="Contraseña"
              name="password"
              onChange={handleInputChange}
            />
            <button
              className="btn btn-sm btn-warning mt-2 text-white fw-bold"
              onClick={handleResetForm}
            >
              Reset
            </button>
          </div>
          {/* {username === "Lovo" && <Message />} */}
        </div>
      </div>
    </>
  );
};

export default FormWithCustomHook;
