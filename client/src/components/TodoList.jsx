import React from "react";

const TodoList = ({ value, handleDelete, id }) => {
  return (
    <div>
      <li>
        {value}
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          <i className="delte-btn">X</i>
        </button>
      </li>
    </div>
  );
};

export default TodoList;
