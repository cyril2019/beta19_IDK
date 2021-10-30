import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Header from "./components/Header";
import Login from "./Login/Login";
import Vote from "./Vote/Vote";

function App() {
  return (
    <div className="base">
      <Header />
      <Vote />
    </div>
  );
}

export default App;
