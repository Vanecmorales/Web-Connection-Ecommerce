import ReactDOM from "react-dom/client";
import "./index.css";
import { BestMarketApp } from "./BestMarketApp";
import { BrowserRouter } from "react-router-dom";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BestMarketApp />
    </BrowserRouter>
  </React.StrictMode>
);
