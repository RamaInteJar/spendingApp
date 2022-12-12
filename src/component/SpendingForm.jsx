import React, {useState} from "react";

const SpendingForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  
  // const[userInput, setUserInput]=useState({
  //   enteredTitle: "",
  //   enteredAmount: "",       //Use this approach if you want to handle multiple states...its optional
  //   enteredDate:""
  // })
  
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  }

  const changeAmountHandler = (event) => {
      setEnteredAmount(event.target.value)
    
  }
  const changeDateHandler = (event) => { 
      setEnteredDate(event.target.value)
 
  };

  const submitHandler = (event) => {
    event.preventDefault()
    
    const spendingData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveSpendingData(spendingData)
    setEnteredTitle(" ");
    setEnteredAmount(" ");
    setEnteredDate(" ")
  }
  
  return (
    <form className="border-2 bg-blend-color-dodge  bg-slate-500 max-w-5xl p-10 mx-auto rounded-xl" onSubmit={submitHandler}>
      <div className="inline-flex space-x-5">
        <div className="flex flex-col">
          <label className="text-bold text-black text-lg">title</label>
          <input
            type="text"
            className="border-4 w-80  h-11 rounded-l mb-6"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-bold text-black text-lg">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="border-4 w-80 mb-6 h-11 rounded-l"
            onChange={changeAmountHandler}
            value={enteredAmount}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-bold text-black text-lg">Date</label>
        <input
          type="Date"
          min="2019-01-01"
          max="2022-12-31"
          className="border-4 w-80 mb-6 h-11 rounded-l"
          onChange={changeDateHandler}
          value={enteredDate}
        />
      </div>
      <div className="flex justify-end">
        <button className="border-4 bg-blue-400 h-12 w-40 rounded-xl  ">
          Add Spending
        </button>
      </div>
    </form>
  );
};

export default SpendingForm;
