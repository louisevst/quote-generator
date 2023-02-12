import React from "react";

const Cite = ({ quote, author }) => {
  return (
    <div className="quote text-whitish  p-5">
      <p>{quote}</p>
      <p className="p-4"> {author}</p>
    </div>
  );
};

export default Cite;
