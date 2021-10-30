import React from "react";
import "./App.css";

import Header from "./components/Header";
import LoginScreen from "./Login/LoginScreen";
import Vote from "./Vote/Vote";

function App() {
  return (
    <div className="base">
      <Header />
      <LoginScreen />
    </div>
  );
}

export default App;
