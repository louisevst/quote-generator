import React from "react";

function Card({ children }) {
  return (
    <div className=" md:translate-y-0 h-[400px] w-[90%] rounded-full lg:h-[550px]  lg:w-[300px] bg-blackGreen p-14 flex justify-around items-center flex-col flex-1">
      {children}
    </div>
  );
}
export default Card;
