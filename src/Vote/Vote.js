import "./Vote.css";
import React, { useState } from "react";
import { ethers } from "ethers";
import Candidate from "../components/Candidate";
import Login from "../artifacts/contracts/Login.sol/Login.json";

const contractAddress = "0xF31905F42A8C8307166a0Ea328C1bf08Ec957791";

function Vote(props) {
  const [selCand, setVote] = useState();
  function goBack() {
    props.setAdmin(false);
    props.setLogin(false);
  }
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
      props.setLoading(true);
      await transaction.wait();
      props.setLoading(false);
      props.setLogin(false);
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
          <p className="back-to-home" onClick={goBack}>
            Back to home
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vote;
