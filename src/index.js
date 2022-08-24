import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import ListPlayers from "./components/ListPlayers";
import EditPlayers from "./components/EditPlayers";
import reportWebVitals from "./reportWebVitals";
import AddPlayers from "./components/AddPlayers";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
