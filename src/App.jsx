import { useState } from "react";
import "./App.css";

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
  const [expenseList, setExpenseList] = useState([]);

  const creditEntry = () => {
    const creditExpenseList = [...expenseList, inputValue];
    const creditor = balance + Number(inputValue);

    setBalance(creditor);
    setInputValue("");
    setExpenseList(creditExpenseList);
  };

  const debitEntry = () => {
    const debitExpenseList = [...expenseList, inputValue];
    const debitor = balance - Number(inputValue);

    setBalance(debitor);
    setInputValue("");
    setExpenseList(debitExpenseList);
  };

  const removeExpense = (index) => {
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
      <button onClick={debitEntry}>Debit Entry</button>
      <ul>
        {expenseList.map((amount, index) => (
          <div key={index}>
            {amount}
            <button onClick={() => removeExpense(index, amount)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
