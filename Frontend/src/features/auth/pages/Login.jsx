import React from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();

    handleLogin(username, password).then((res) => {
      console.log(res);
    });
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Enter Your Username"
          />
          <input
            onInput={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <button>Submit</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
