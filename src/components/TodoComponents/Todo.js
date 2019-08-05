import React from "react";

const Todo = props => {
  return (
    <div className={`task${props.todo.completed} ? ' completed ' : ''`}>
      props.todo.name
    </div>
  );
};

export default Todo;
