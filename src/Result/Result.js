import React from "react";
import CandidateResult from "../components/CandidateResult";
import "./Result.css";

function Result(props) {
  function goBack() {
    props.setAdmin(false);
    props.setLogin(false);
  }
  return (
    <div>
      <div className="cand-list">
        <div className="main">
          <div className="voting-panel">
            <p>Results.</p>
            <div className="cand-list">
              <CandidateResult
                name="Cyril"
                age="21"
                gender="male"
                setLoading={props.setLoading}
              />
              <CandidateResult
                name="Nevin"
                age="21"
                gender="male"
                setLoading={props.setLoading}
              />
              <CandidateResult
                name="Dhanush"
                age="21"
                gender="male"
                setLoading={props.setLoading}
              />
            </div>
            <p className="back-to-home" onClick={goBack}>
              Back to home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
