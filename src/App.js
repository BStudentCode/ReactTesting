import logo from "./logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
