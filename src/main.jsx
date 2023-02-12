import React from "react";
import ReactDOM from "react-dom/client";
import QuoteCard from "./componants/QuoteCard";
import Card2 from "./componants/Card2";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QuoteCard />
  </React.StrictMode>
);
