import "./Login.css";
import Header from "../components/Header";
import React, { useState } from "react";

function Login() {
  const [adhar, setadhar] = useState(0);
  const [dob, setdob] = useState(0);
  function login() {
    console.log("adhar=%s and dob=%s", adhar, dob);
  }
  return (
    <div>
      <div className="login-main">
        <div className="main-header">Login</div>
        <div className="main-form">
          <form>
            <div className="form-field">
              <p>ADHAR No:</p>
              <input
                type="text"
                placeholder="     0000 0000 0000"
                onChange={(e) => setadhar(e.target.value)}
              />
            </div>
            <div className="form-field">
              <p>DOB: </p>
              <input
                type="text"
                placeholder="     DD/MM/YYYY"
                onChange={(e) => setdob(e.target.value)}
              />
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
