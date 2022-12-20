import React, { useState } from "react";
import SpendingDate from "./SpendingDate";

const SpendingItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <div className="bg-[#4b4b4b] rounded-xl shadow-2xl items-center mb-6 p-2">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center ">
          <SpendingDate date={props.date} />
          <h2 className="  text-4xl text-white ">{title}</h2>
        </div>
        <div className="flex gap-x-1">
          <div className="bg-purple-900 border-2 border-white rounded-lg ">
            <span className="text-white font-bold text-center text-3xl">
              ${props.amount}
            </span>
          </div>
          <button
            className="text-white bg-blue-900 border-2 border-white rounded-lg"
            onClick={clickHandler}
          >
            Change title
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpendingItem;
