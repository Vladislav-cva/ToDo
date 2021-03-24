import './App.css';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import {useState} from 'react'

function App() {
  let todos = [
    {
      id: 1, complited: false, title: 'Купить '
    },
    // {
    //   id: 2, complited: false, title: 'Купить'
    // },
    // {
    //   id: 3, complited: false, title: 'Купить'
    // }
  ]

  const [isValue, setIsValue] = useState(todos)

  const handleChangeBox = (id) =>{
    setIsValue(
      isValue.map(item =>{
        if(item.id === id){
          item.complited = !item.complited
        }
        return item
      })
    )
  }

  const handleRemoveTodo = (id) => {
    setIsValue(
      isValue.filter(item => item.id !== id)
    )
  }

  const handleCreate = (title) => {
    setIsValue(isValue.concat([{
      id: Date.now(),
      complited: false,
      title,
    }]))
  }

  return (
    <div className="wrapper">
      <h1>Shopping list</h1>
      <AddTodo handleCreate={handleCreate}/>
      {
        isValue.length? <TodoList todos={isValue} handleChangeBox={handleChangeBox} handleRemoveTodo={handleRemoveTodo}/> : 
        <p>list is null</p>
      }
    </div>
  );
}

export default App;
