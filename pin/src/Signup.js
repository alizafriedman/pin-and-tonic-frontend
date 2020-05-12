import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { backendUrl } from "./config";
// import { PokemonContext } from "./PokemonContext";


const Signup = () => {
  //   const { login, authToken } = useContext(PokemonContext);
  // console.log(authToken) // console log authToken to test login flow
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("demo@example.com");
    const [password, setPassword] = useState("password");
    const [username, setUsername] = useState("username")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendUrl}/users/new`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      setLoggedIn(true);
    }
  };

  const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);
    const updateUsername = (e) => setUsername(e.target.value);

  if (loggedIn) return <Redirect to="/" />;

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          value={username}
          onChange={updateUsername}
          name="username"
          placeholder="Enter Username"
        />
        <input
          type="email"
          value={email}
          onChange={updateEmail}
          name="email"
          placeholder="Enter Email"
        />
        <input
          type="password"
          value={password}
          onChange={updatePassword}
          name="password"
          placeholder="Enter Password"
        />

        <button type="submit">Sign Up</button>
      </form>
}
    </div>
  );
};

export default Signup;
