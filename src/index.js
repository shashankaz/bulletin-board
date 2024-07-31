import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToggleProvider } from "./context/ToggleContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </React.StrictMode>
);
