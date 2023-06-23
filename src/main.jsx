import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProviderWrapper } from "./context/lang.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <LanguageProviderWrapper>
        <App />
      </LanguageProviderWrapper>
    </Router>
  </React.StrictMode>
);
