import React from "react";

function Card({ children, className }) {
  return (
    <section
      className={`${
        className ?? ""
      } sm:w-[300px] sm:h-[500px] lg:w-[350px] lg:h-[550px] w-[250px] h-[600px] rounded-full m-0 flex flex-col items-center justify-around py-14`}
    >
      {children}
    </section>
  );
}
export default Card;
