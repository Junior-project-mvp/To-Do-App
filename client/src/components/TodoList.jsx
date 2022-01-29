import React from "react";

const TodoList = ({ value, handleDelete, id }) => {
  return (
    <div className="list-item">
      <div>
        <li>{value}</li>
      </div>
      <div>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default TodoList;
