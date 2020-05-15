import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { backendUrl } from "./config";
// import NavBar from "./components/NavBar";
import {UserContext} from './UserContext'

const Login = () => {
  const { login } = useContext(UserContext);
  // console.log(authToken) // console log authToken to test login flow
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("password");
  const context = useContext(UserContext)

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
      login(token)
      // context.setAuthToken(token)
      // loggedIn(token)
    }
  };

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  if (loggedIn) return <Redirect to="/" />;

  return (
    <div className="centered middled">
      <form onSubmit={handleSubmit} className='signForm'>
        <input
          className='emailInput'
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
        <input
          className='passwordInput'
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button className='loginButton' type="submit">Login</button>
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
