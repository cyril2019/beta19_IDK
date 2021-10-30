import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Candidate from "./components/Candidate";
import Header from "./components/Header";

function App() {
  return (
    <div className="base">
      <Header />
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
