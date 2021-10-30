import "./Vote.css";
import React, { useState } from "react";
import Candidate from "../components/Candidate";

function Vote() {
  return (
    <div>
      <div className="main">
        <div className="voting-panel">
          <p>Cast your vote.</p>
          <div className="cand-list">
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

export default Vote;
