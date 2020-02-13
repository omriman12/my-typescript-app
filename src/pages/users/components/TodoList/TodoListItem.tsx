import React from 'react'; 

type TodoListItemProps = {
  todo: string,
  handleRemoveTodo: Function
}

const TodoListItem = ( {todo, handleRemoveTodo} : TodoListItemProps )  => {
  return (
    <p>
      {todo}
      
      <button type="button" onClick={() => handleRemoveTodo(todo)}>
        Remove
      </button>
    </p>
  )
}

export default TodoListItem;