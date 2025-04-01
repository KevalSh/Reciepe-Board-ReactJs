import { useState } from "react";
import "./App.css";

/**
 * 1) input value  state --done
 * 2) Add 'add' button and bind the handler --done
 * 3) Will make the ul element which will show list  -- done
 * 4) Will create state for the reciepe item that will be rendered in the li element  --done
 * 5) Will make remove button on the each renedered list --done
 * 6) Will create remove handler which will take Index as an arguments  -- done
 * 7) Index will be matched for the removal of the desired item and listItem state will be updated (filter method) --done
 * 8) Will create Edit button for each list item
 * 9) Edit handler will be created and New state for the edited item index will be created
 * 10) editHandler will have index as an argument for detecting the exact location in the array
 * 11) splice method will be applied for the replacement of the element
 * 12) update will take place in the input field there save button will be created while in the editing stage
 * 13) Savehandler will be created. Which will update the state for the list item
 * 14) inputValue should be empty array and editIndex should be set to intial state
 */
function App() {
  const [inputValue, setInputValue] = useState("");
  const [reciepeList, setReciepeList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addItem = () => {
    const newReciepeList = [...reciepeList, inputValue];
    setReciepeList(newReciepeList);
    setInputValue("");
    console.log(newReciepeList);
  };

  const removeItem = (index) => {
    const removeReciepeList = reciepeList.filter((_, i) => i !== index);
    setReciepeList(removeReciepeList);
  };

  const editItem = (reciepe, index) => {
    setEditIndex(index);
    setInputValue(reciepe);
  };

  const saveItem = () => {
    const editedReciepeList = [...reciepeList];
    editedReciepeList.splice(editIndex, 1, inputValue);
    setReciepeList(editedReciepeList);
    setInputValue("");
    setEditIndex(-1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Reciepe Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {editIndex > -1 ? (
        <button onClick={() => saveItem()}>Save</button>
      ) : (
        <button onClick={addItem}>Add</button>
      )}

      <ul>
        {reciepeList.map((reciepe, index) => (
          <div key={index}>
            {" "}
            {reciepe}
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => editItem(reciepe, index)}>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
