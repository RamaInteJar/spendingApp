import React from "react";
import SpendingForm from "./SpendingForm";

const NewSpending = (props) => {
  const saveSpendingDatahandler = (enteredSpendingData) => {
    const spendingData = {
      ...enteredSpendingData,
      id: Math.random().toString()
    };
    props.onAddSpending(spendingData)
  }

  return (
    <div>
      <SpendingForm onSaveSpendingData={saveSpendingDatahandler} />
    </div>
  );
};

export default NewSpending;
