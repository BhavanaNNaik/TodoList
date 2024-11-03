import React from 'react';


function TodoContainer({ todos, delTodo }) {
  return (
    <div className="TodoContainer">
      {todos.map((todo,index) => {
        return (
        <div className="Todo">
        <p>{todo}</p>
        <input type="checkbox" />
         <button className="button" onClick={()=>delTodo(index)}>Delete</button>
 </div>
      );
})}
    </div>
  );
}

export default TodoContainer;
