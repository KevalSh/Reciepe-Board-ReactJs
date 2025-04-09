import { useState } from "react";

const Form = ({ creditEntry, debitEntry }) => {
  const [inputValue, setInputValue] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Add the amount"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        class="m-8 p-1 bg-zinc-500 border-2 border-indigo-300 rounded-md text-white font-bold "
      />
      <button
        class="p-2 m-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
        onClick={() => {
          creditEntry({
            inputValue,
          });
          setInputValue("");
        }}
      >
        Credit Entry
      </button>
      <button
        class="p-2 m-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700"
        onClick={() => {
          debitEntry({ inputValue });
          setInputValue("");
        }}
      >
        Debit Entry
      </button>
    </div>
  );
};

export default Form;
