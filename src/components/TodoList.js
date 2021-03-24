import React from "react";
import "./TodoList.css";
import TodoItem from "../components/TodoItem"

export default function TodoList(props) {
    return(
        <ul>
            {
                props.todos.map((todo, i)=> {
                    return <TodoItem
                        todo={todo} 
                        key={todo.id} 
                        i={i} 
                        handleChangeCheck={props.handleChangeBox}
                        handleRemoveTodo={props.handleRemoveTodo}
                        />
                })
            }
        </ul>
    )
}