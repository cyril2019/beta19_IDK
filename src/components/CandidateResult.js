import React, { useState } from "react";
import { ethers } from "ethers";
import Login from "../artifacts/contracts/Login.sol/Login.json";
function CandidateResult(props) {
  const [votes, setVotes] = useState(0);
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  async function getResult() {
    await requestAccount();
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        contractAddress,
        Login.abi,
        provider
      );
      try {
        const data = await contract.getResult(props.name);
        setVotes(data.toString());
      } catch (err) {
        console.log("Error: ", err);
      }
      console.log("reached end of Result");
    }
  }

  return (
    <div className="candidate-card">
      <div className="cand-image"></div>
      <div className="cand-detail">
        <p>Name:{props.name}</p>
        <p>Votes:{votes}</p>
        <button onClick={getResult}>Refresh Votes</button>
      </div>
    </div>
  );
}

export default CandidateResult;
