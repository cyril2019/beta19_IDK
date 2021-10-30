import "./Candidate.css";
import React from "react";
function Candidate() {
  return (
    <div className="candidate-card">
      <div className="cand-image"></div>
      <div className="cand-detail">
        <p>Name:</p>
        <p>Age:</p>
        <p>Gender:</p>
      </div>
      <div className="cand-selector">
        <input type="radio"></input>
      </div>
    </div>
  );
}

export default Candidate;
