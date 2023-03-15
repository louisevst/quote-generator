import React from "react";

const Button = ({ onClick }) => {
  return (
    <button
      className="bg-oranYellow p-4 rounded-full font-bold m-auto text-blackGreen hover:text-oranYellow hover:bg-blackGreen hover:border hover:border-oranYellow"
      onClick={onClick}
    >
      Get New Quote
    </button>
  );
};

export default Button;
