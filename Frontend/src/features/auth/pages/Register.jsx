import React from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";



const Register = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          <input type="text" name="email" placeholder="Enter your email" />
          <input type="password" name="password" placeholder="password" />
          <button>Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link className="toggleAuthForm" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
