import React from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(username,password)

    console.log("userlogged in");
    
  };

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {setUsername(e.target.value);}}
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
          />
          <input onInput={(e)=>{setPassword(e.target.value)}}
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <button className="button primary-button">Login</button>
        </form>
        <p>
          Don't have an account? <Link to={"/register"}>Create Account</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
