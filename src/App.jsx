import { useState } from "react";
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
  const [inputValue, setInputValue] = useState();
  // {type : 'Credit' | 'Debit' , amount : inputValue}
  const [expenseList, setExpenseList] = useState([]);

  const creditEntry = () => {
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
    setInputValue("");
    setExpenseList(creditExpenseList);
  };

  const debitEntry = () => {
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
    setInputValue("");
    setExpenseList(debitExpenseList);
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
      <h3> Total Balance : {balance} </h3>
      <input
        type="text"
        placeholder="Add the amount"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={creditEntry}>Credit Entry</button>
      <button className="bg-red-50" onClick={debitEntry}>
        Debit Entry
      </button>
      <ul>
        {expenseList.map((amount, index) => (
          <div key={index}>
            {amount.type} -- {amount.amount}
            <button onClick={() => removeExpense(index, amount)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
