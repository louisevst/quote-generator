import React from "react";

function Card({ children }) {
  return (
    <div className=" md:translate-y-0 min-h-[400px] rounded-full  lg:max-w-[450px] lg:min-w-[400px] bg-blackGreen p-14 flex justify-center items-center flex-col flex-1">
      {children}
    </div>
  );
}
export default Card;
