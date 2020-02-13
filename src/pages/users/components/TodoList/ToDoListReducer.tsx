// import React, { useState, useReducer  } from 'react'; 
// import TodoListItem from './TodoListItem';

// const initialState = { todoList: [] };

// function reducer(state : any, action : any) {
//   switch (action.type) {
//     case 'add':
//       var nextTodoList : string[] = [
//         ...state.todoList,
//         action.todo
//       ];
//       return {todoList: nextTodoList};
//     case 'remove':
//       var nextTodoListRemove : string[] = state.todoList.filter((x:any)=> x !== action.todo);
//       return {todoList: nextTodoListRemove};
//     default:
//       throw new Error();
//   }
// }

// const ToDoListReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const [todoList, setTodoList] = useState<string[]>([]);
//   const [currentTodo, setCurrentTodo] = useState<string>('');

//   const handleHadTodo = () =>{
//     dispatch({type: 'add', todo: currentTodo});
//     // var nextTodoList : string[] = [
//     //   ...todoList,
//     //   currentTodo
//     // ];
//     // setTodoList((currentTodoList) => nextTodoList);
//   }
  
//   const handleRemoveTodo = (todo : string) =>{
//     dispatch({type: 'remove', todo: todo});
//     // var nextTodoList : string[] = todoList.filter(x=> x !== todo);
//     // setTodoList((currentTodoList) => nextTodoList);
//   }

//   return (
//     <div>
//       <br/>
//       Add todo: <input type="text" placeholder="todo" onChange={(event) => setCurrentTodo(event.target.value)}/>
//       <button type="button" onClick={handleHadTodo}>
//         Add
//       </button>      

//       <div>
//         <p>List</p>
//         {state.todoList.map((name:string, index: number)=> <TodoListItem key={`todo-${index}`} todo={name} handleRemoveTodo={handleRemoveTodo}/>)}
//       </div>

//     </div>
//   );
// }

// export default ToDoListReducer;