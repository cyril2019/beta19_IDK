import "./Login.css";
import Header from "../components/Header";
import { ethers } from "ethers";
import Login from "../Login.json";
import React, { useState } from "react";

const contractAddress = "0xF31905F42A8C8307166a0Ea328C1bf08Ec957791";

function LoginScreen(props) {
  const [adhar, setadhar] = useState(0);
  const [dob, setdob] = useState(0);
  const [err, setErr] = useState("");
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  function validate() {
    if (adhar.length != 14) setErr("Voter Id format incorrect");
    else login();
  }

  async function login() {
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
        const isAdmin = await contract.getAdmin();
        if (isAdmin == adhar) {
          props.setAdmin(true);
        } else {
          if (data == false) {
            props.setLogin(true);
            props.setadhar(adhar);
          }
        }

        console.log(data);
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
          <div>
            <div className="form-field">
              <p>Voter Id:</p>
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
              <button type="submit" onClick={validate}>
                LOGIN
              </button>
            </div>
            <div>
              <p>{err}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
