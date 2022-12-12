import React from "react";
import NewSpending from "./component/NewSpending";
import Spending from "./component/Spending";


const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e4",
      title: "New wooden Desk",
      amount: 450.00,
      date: new Date(2021, 5, 12),
    },
  ];
  const addSpendingHandler = (expenses) => {
    console.log('In App.js');
    console.log(expenses);
    
  }
  return (
    <div>
      <NewSpending onAddSpending={ addSpendingHandler} />
      <Spending items={expenses} />
    </div>
  );
};

export default App;
