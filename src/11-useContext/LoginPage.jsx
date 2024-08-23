import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button className="btn btn-primary" onClick={() => {
        setUser({
          id: 1,
          name: "John Doe",
          email: "",
        });
      }}>SetUser</button>
    </>
  );
};

export default LoginPage;
