import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Dani" />
    <NameTag name="Quinn" />
    <NameTag name="Gussie" />
    <NameTag name="Beka" />
    <NameTag name="Paweł" />
    <NameTag name="Paulina" />
    <NameTag name="Hannah" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
