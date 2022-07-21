import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home.js";
import Classes from "./Classes.js";
import Dungeon from "./Dungeon";
import Comments from "./Comments";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
