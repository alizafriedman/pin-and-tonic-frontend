import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { backendUrl } from "../config";
import { UserContext } from "../UserContext";
import "./styles.sass";

const LoginPopNew = (props) => {
  const { login, authToken } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const email = "demo@demo.com"
      const password = "demo123"
    const response = await fetch(`${backendUrl}/users/token`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      props.setOpen(false);
      const { token } = await response.json();
      setLoggedIn(true);
      login(token);
    }
  };

//   const updateEmail = (e) => setEmail("demo@demo.com");
//   const updatePassword = (e) => setPassword("demo123");

  if (loggedIn) return <Redirect to="/" />;

  return (
    <div className="centered middled">
      <form onSubmit={handleSubmit} className="signForm">
        <input
          className="emailInput"
          type="text"
          placeholder="Email"
                  defaultValue = "demo@demo.com"
        />
        <input
          className="passwordInput"
          type="password"
                  placeholder="Password"
                  defaultValue="demo123"
        />
        <button className="loginButton" type="submit">
          Demo Login
        </button>
      </form>
    </div>
  );
};

export default LoginPopNew;
