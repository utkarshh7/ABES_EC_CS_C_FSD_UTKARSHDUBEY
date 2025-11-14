import { useState } from "react"
import InputToDo from "./Components/InpToDo"
function App() {
  const [todoList, setTodoList] = useState([]);
  const inputHandler = (inputValue) => {
    setTodoList([...todoList, inputValue]);
  }
  const deleteHandler = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList([...newList]);
  }
  const updateHandler = (index, data) => {
    const updated = window.prompt('Update task', data);
    if (updated === null) return;
    const trimmed = updated.trim();
    if (trimmed === '') return;
    const newList = [...todoList];
    newList[index] = trimmed;
    setTodoList(newList);
  }
  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todoList.map((data, index) =>
        <li key={index}>
          {data}
          <button onClick={() => deleteHandler(index)}>DEL</button>
          <button onClick={() => updateHandler(index, data)}>EDIT</button>
        </li>)}
      <InputToDo inputHandler={inputHandler} />
    </div>
  )
}

export default App