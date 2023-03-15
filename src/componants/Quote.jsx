import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";

const Quote = ({ author, quote, fetchQuote }) => {
  return (
    <>
      <div className="text-whitish p-10">
        <p>{quote}</p>
        <p className="p-4"> {author}</p>
      </div>
      <Button onClick={fetchQuote} />
    </>
  );
};

export default Quote;
