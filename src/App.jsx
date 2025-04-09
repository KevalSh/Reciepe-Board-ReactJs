import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./index.css";

/**
 * 10000 intial balanace  --done
 * expense will make minus the balance --done
 * credit will increase the balance  -- done
 * Expense can be removed also. Its effect should be reflected in the balance.
 *
 */

export default function App() {
  const [balance, setBalance] = useState(10000);

  // {type : 'Credit' | 'Debit' , amount : inputValue}
  const [expenseList, setExpenseList] = useState([]);

  const creditEntry = ({ inputValue }) => {
    //console.log(inputValue);
    // console.log(typeof inputValue);
    // return;

    if (inputValue !== "") {
      const creditExpenseList = [...expenseList];

      const transactions = {
        id: Math.random(),
        type: "Credit",
        amount: inputValue,
      };

      creditExpenseList.push(transactions);

      const creditor = Number(balance) + Number(inputValue);

      //console.log(creditExpenseList, creditor);

      setBalance(creditor);

      setExpenseList(creditExpenseList);
    } else {
      alert("Please enter amount");
    }
  };

  const debitEntry = ({ inputValue }) => {
    // console.log(inputValue);
    // return;

    if (inputValue !== "") {
      const debitExpenseList = [...expenseList];
      // structure of the transaction object
      const transactions = {
        id: Math.random(),
        type: "Dedit",
        amount: inputValue,
      };

      debitExpenseList.push(transactions);

      const debitor = balance - Number(inputValue);

      setBalance(debitor);

      setExpenseList(debitExpenseList);
    } else {
      alert("please enter amount");
    }
  };

  const removeExpense = (index, amount) => {
    // order of parameter should be maintained as they were passed near the function
    //correcting the balance after removing the item
    let updateBalance = balance;
    if (amount.type === "Credit") {
      updateBalance = Number(updateBalance) - Number(amount.amount);
    } else {
      updateBalance = Number(updateBalance) + Number(amount.amount);
    }
    setBalance(updateBalance);
    // removing the expense
    const updatedExpenseList = expenseList.filter((_, i) => i !== index);
    setExpenseList(updatedExpenseList);
  };

  return (
    <div>
      <h1 class="m-2 p-2 text-teal-500 bg-stone-100 text-center text-2xl rounded-2xl font-extrabold">
        Expense Calculator
      </h1>
      <h3 class="p-4 mt-8 bg-slate-500 text-center border-3 border-indigo-300 text-amber-100 text-xl font-bold">
        {" "}
        Total Balance : {balance}{" "}
      </h3>
      <Form creditEntry={creditEntry} debitEntry={debitEntry} />
      <List expenseList={expenseList} removeExpense={removeExpense} />
    </div>
  );
}
