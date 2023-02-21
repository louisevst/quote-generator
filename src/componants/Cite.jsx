import React from "react";

const Cite = ({ quote, author }) => {
  return (
    <div className="text-whitish ">
      <p>{quote}</p>
      <p className="p-4"> {author}</p>
    </div>
  );
};

export default Cite;
