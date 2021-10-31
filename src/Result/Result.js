import React from "react";
import CandidateResult from "../components/CandidateResult";
import Header from "../components/Header";

function Result() {
  return (
    <div>
      <Header />
      <div className="cand-list">
        <div className="main">
          <div className="voting-panel">
            <p>Results.</p>
            <div className="cand-list">
              <CandidateResult name="Cyril" age="21" gender="male" />
              <CandidateResult name="Nevin" age="21" gender="male" />
              <CandidateResult name="Dhanush" age="21" gender="male" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
