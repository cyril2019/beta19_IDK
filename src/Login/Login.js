import React from "react";
import "./Login.css";
import Header from "../components/Header";

function login() {
  console.log("clicked login");
}

function Login() {
  return (
    <div>
      <Header />
      <div className="login-main">
        <div className="main-header">Login</div>
        <div className="main-form">
          <form>
            <div className="form-field">
              <p>ADHAR No:</p>
              <input type="text" />
            </div>
            <div className="form-field">
              <p>DOB: </p>
              <input type="text" />
            </div>
            <div className="form-field">
              <p>Password:</p>
              <input type="text" />
            </div>
            <div className="login-btn">
              <button type="submit" onClick={login}>
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
