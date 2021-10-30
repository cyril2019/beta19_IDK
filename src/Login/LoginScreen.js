import "./Login.css";
import Header from "../components/Header";
import { ethers } from "ethers";
import Login from "../artifacts/contracts/Login.sol/Login.json";
import React, { useState } from "react";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function LoginScreen() {
  const [adhar, setadhar] = useState(0);
  const [dob, setdob] = useState(0);
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  async function login() {
    console.log("adhar=%s and dob=%s", adhar, dob);
    await requestAccount();
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        contractAddress,
        Login.abi,
        provider
      );
      try {
        const data = await contract.vote_status(adhar);
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
      console.log("reached end");
    }
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

export default LoginScreen;
