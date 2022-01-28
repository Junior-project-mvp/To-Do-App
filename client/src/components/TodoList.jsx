import React from "react";

const TodoList = ({ todos, handleDelete, handleChange }) => {

  return (
    <div>
      <ul>
        {todos.map((todo, i) => {
          return (
            <div key={i}>
              <li>
                {todo}
                <button className="delete-btn" onClick={handleDelete}>
                  X
                </button>
                <button className="edit-btn">edit</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
