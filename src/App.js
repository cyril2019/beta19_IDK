import "./App.css";
import { ethers } from "ethers";
import Login from "./artifacts/contracts/Login.sol/Login.json";
import React, { useState } from "react";
import Header from "./components/Header";
import Candidate from "./components/Candidate";
import LoginScreen from "./Login/LoginScreen";
import Vote from "./Vote/Vote";
import Result from "./Result/Result";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  const [isLoggedin, setLogin] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [adhar, setadhar] = useState(0);
  return (
    <div className="base">
      <Header />
      {isAdmin ? (
        <Result />
      ) : !isLoggedin ? (
        <LoginScreen
          setLogin={setLogin}
          setadhar={setadhar}
          setAdmin={setAdmin}
        />
      ) : (
        <Vote adhar={adhar} setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
