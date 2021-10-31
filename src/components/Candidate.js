import "./Candidate.css";
import React from "react";
function Candidate(props) {
  function handlClick() {
    props.setVote(props.name);
  }
  return (
    <div className="candidate-card">
      <div className="cand-image"></div>
      <div className="cand-detail">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Gender:{props.gender}</p>
      </div>
      <div className="cand-selector">
        <button className="Vote" onClick={handlClick}>
          Vote
        </button>
      </div>
    </div>
  );
}

export default Candidate;
