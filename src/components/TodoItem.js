import React from "react";
import './TodoItems.css'

export default function TodoItem ({todo, i, handleChangeCheck, handleRemoveTodo}) {
    
    return(
        <li className={!todo.complited? 'list': 'list done'}>
            <span>
                <input className="input-item"
                    type="checkbox"
                    onChange={()=> handleChangeCheck(todo.id)}
                />
                <strong>{i+1}</strong>
                    &nbsp;
                    {todo.title}
            </span>
            <button className="button-item" onClick={()=>handleRemoveTodo(todo.id)}>&times;</button>
        </li>
    )
}
