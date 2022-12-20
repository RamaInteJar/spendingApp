import React from "react";

const SpendingFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="mb-8 ">
      <div className="justify-between flex">
        <div className="mt-2 ml-3">
          <label htmlFor="">Select the Year</label>
        </div>
        <div>
          <select value={props.selected} onChange={dropDownChangeHandler} className="w-28 h-10 text-center border-blue-900 border-2 rounded-md mr-3">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SpendingFilter;
