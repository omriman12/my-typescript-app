import React, { useState  } from 'react'; 
import TodoListItem from './TodoListItem';

const ToDoList = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [currentTodo, setCurrentTodo] = useState<string>('');

  const handleHadTodo = () =>{
    var nextTodoList : string[] = [
      ...todoList,
      currentTodo
    ];
    setTodoList((currentTodoList) => nextTodoList);
  }
  
  const handleRemoveTodo = (todo : string) =>{
    var nextTodoList : string[] = todoList.filter(x=> x !== todo);
    setTodoList((currentTodoList) => nextTodoList);
  }

  return (
    <div>
      <br/>
      Add todo: <input type="text" placeholder="todo" onChange={(event) => setCurrentTodo(event.target.value)}/>
      <button type="button" onClick={handleHadTodo}>
        Add
      </button>      

      <div>
        <p>List</p>
        {todoList.map((name, index)=> <TodoListItem key={`todo-${index}`} todo={name} handleRemoveTodo={handleRemoveTodo}/>)}
      </div>

    </div>
  );
}

export default ToDoList;