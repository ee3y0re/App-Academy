import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game";

document.addEventListener("DOMContentLoaded", () => {
  const czechHedgehog = document.getElementById("czech-hedgehog");
  ReactDOM.render(<Game />, czechHedgehog)
});