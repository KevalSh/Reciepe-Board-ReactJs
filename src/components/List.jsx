const List = ({ expenseList, removeExpense }) => {
  return (
    <div>
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
};

export default List;
