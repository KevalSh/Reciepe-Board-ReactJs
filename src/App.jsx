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
      setInputValue("");
      setExpenseList(creditExpenseList);
    } else {
      alert("Please enter amount");
    }
  };

  const debitEntry = () => {
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
      setInputValue("");
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
      <input
        type="text"
        placeholder="Add the amount"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        class="m-8 p-1 bg-zinc-500 border-2 border-indigo-300 rounded-md text-white font-bold "
      />
      <button
        class="p-2 m-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
        onClick={creditEntry}
      >
        Credit Entry
      </button>
      <button
        class="p-2 m-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700"
        onClick={debitEntry}
      >
        Debit Entry
      </button>
      <ul>
        {expenseList.map((amount, index) => (
          <div
            class="m-2 flex justify-around bg-slate-500 rounded-md text-white font-medium"
            key={index}
          >
            <div class="p-4">
              {amount.type} -- {amount.amount}
            </div>

            <button
              class="p-2 m-2 bg-yellow-500 text-white rounded-md font-medium hover:bg-slate-800 hover:text-yellow-500"
              onClick={() => removeExpense(index, amount)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
