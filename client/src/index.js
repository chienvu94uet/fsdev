import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>
);
