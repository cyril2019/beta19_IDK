import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Candidate from "./components/Candidate";

function App() {
  return (
    <div className="base">
      <div className="header">
        <div className="header-logo">E-Voter</div>
        <button className="login-button">Login</button>
      </div>
      <div className="main">
        <div className="voting-panel">
          <p>Cast your vote.</p>
          <div className="cand-list">
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
          </div>
          <button className="btn-vote">Vote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
