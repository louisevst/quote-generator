import React from "react";

const Button = ({ onClick }) => {
  return (
    <button
      className="bg-oranYellow p-3 flex justify-center m-2 rounded-xl font-bold"
      onClick={onClick}
    >
      Get New Quote
    </button>
  );
};

export default Button;
