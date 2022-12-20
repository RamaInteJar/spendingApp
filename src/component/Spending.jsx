import React, { useState } from "react";
import SpendingFilter from "./SpendingFilter";
import SpendingItem from "./SpendingItem";

const Spending = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <div className="mt-16 bg-slate-500 max-w-5xl p-10 mx-auto rounded-xl">
        <SpendingFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <SpendingItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Spending;
