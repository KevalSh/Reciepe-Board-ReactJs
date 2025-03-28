import {useState, useRef} from 'react';

export default function Inputfield (){

    const [inputValue, setInputValue] = useState('')
    const [listItem, setListItem] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const ref = useRef(null)

    function addItemHandler (){
        if(inputValue.trim() !== ''){
            setListItem([...listItem, inputValue])
            setInputValue('')
            ref.current.focus()
        }    
    }

    function removeHandler(index) {
        const newListItem = listItem.filter( (_,i) => i !== index )
        setListItem(newListItem)
    }

    function editHandler(){
        setIsEditing(true)
        console.log(isEditing)
    } 


    return(
        <div>
            <input className='inputStyle' ref={ref} type='text' placeholder="Reciepe Name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className='buttonStyle' onClick = {addItemHandler} >Add</button>
            <ul>{listItem.map ( (item,index) => 
                <div className='listStyle' key = {index}> 
                    {item}
                    <button className='buttonStyle'onClick={editHandler}>Edit</button>
                    <button className='buttonStyle' onClick={() => removeHandler(index)}>Remove</button>
                </div> )} </ul>
            
        </div>
    )
}