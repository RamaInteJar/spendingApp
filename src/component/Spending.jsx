import React from 'react'
import SpendingItem from './SpendingItem';

const Spending = (props) => {
  return (
    <div className='mt-16 bg-slate-500 max-w-5xl p-10 mx-auto rounded-xl'>
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
  );
}

export default Spending