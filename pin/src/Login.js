import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { backendUrl } from "./config";
// import NavBar from "./components/NavBar";
// import { PokemonContext } from "./PokemonContext";

const Login = () => {
//   const { login, authToken } = useContext(PokemonContext);
  // console.log(authToken) // console log authToken to test login flow
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendUrl}/users/token`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      setLoggedIn(true);
    }
  };

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  if (loggedIn) return <Redirect to="/" />;

  return (
    <div className="centered middled">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
        {/* <button type="button" onClick={handleOpen}>
          Open Modal
        </button> */}
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal> */}
      </form>
    </div>
  );
};

export default Login;
