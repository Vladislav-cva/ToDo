import React, {useState} from "react";
import "./AddTodo.css";

export default function AddTodo ({handleCreate}){
    const [inputValue, setInputValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(inputValue.trim()){
            handleCreate(inputValue);
            setInputValue('')
        }
    }

    return(
        <form className="form-wrapper" onSubmit={submitHandler}>
            <input className="add-new-item" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/> 
            <button type="submit" className="form-button">add todo</button>
        </form>
    )
}