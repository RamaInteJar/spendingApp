import React from 'react'

const SpendingDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
  return (
    <div className="text-2xl mr-12 h-32 w-32 rounded-xl bg-slate-900 p-3 border-white border-2">
      <div className=" text-white">{month}</div>
      <div className=" text-white">{year}</div>
      <div className=" text-white text-3xl">{day}</div>
    </div>
  );
}
export default SpendingDate
