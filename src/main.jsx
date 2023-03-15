import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import QuoteCard from "./componants/QuoteCard";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QuoteCard />
  </React.StrictMode>
);
