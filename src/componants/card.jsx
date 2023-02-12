import React from "react";

function Card({ children }) {
  return (
    <div className="card bg-blackGreen p-5 flex justify-center items-center flex-col">
      {children}
    </div>
  );
}
export default Card;
