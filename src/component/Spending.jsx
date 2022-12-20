import React, {useState} from 'react'
import SpendingFilter from './SpendingFilter';
import SpendingItem from './SpendingItem';

const Spending = (props) => {
  const [filteredYear, setFilteredYear]=useState("2020")
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      <div className="mt-16 bg-slate-500 max-w-5xl p-10 mx-auto rounded-xl">
        <SpendingFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <SpendingItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <SpendingItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <SpendingItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <SpendingItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </div>
    </div>
  );
}

export default Spending