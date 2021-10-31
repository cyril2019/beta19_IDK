import "./Vote.css";
import React, { useState } from "react";
import { ethers } from "ethers";
import Candidate from "../components/Candidate";
import Login from "../artifacts/contracts/Login.sol/Login.json";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function Vote(props) {
  const [selCand, setVote] = useState();
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  async function vote() {
    if (!selCand) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Login.abi, signer);
      const transaction = await contract.vote(props.adhar, selCand);
      await transaction.wait();
      props.setLogin();
    }
  }
  return (
    <div>
      <div className="main">
        <div className="voting-panel">
          <p>Cast your vote.</p>
          <div className="cand-list">
            <Candidate name="Cyril" age="21" gender="male" setVote={setVote} />
            <Candidate name="Nevin" age="20" gender="male" setVote={setVote} />
            <Candidate
              name="Dhanush"
              age="19"
              gender="male"
              setVote={setVote}
            />
          </div>
          <div>
            {selCand ? <p>Vote for {selCand}</p> : <p>Select a candidate</p>}
          </div>
          <div>
            <button onClick={vote}>Vote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;
