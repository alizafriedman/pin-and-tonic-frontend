import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { backendUrl } from "./config";
import { UserContext } from './UserContext';
import "./components/styles.sass";

const Login = (props) => {
  const { login, authToken } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendUrl}/users/token`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      props.setOpen(false)
      const { token } = await response.json();
      setLoggedIn(true);
      login(token)
      
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
      </form>
    </div>
  );
};

export default Login;
