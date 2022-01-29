import React from "react";

const Todo = ({ todo, handleChange, handleSubmit }) => {
  return (
    <div className="todo-container">
      <div>
        <input
          className="input-todo"
          type="text"
          onChange={handleChange}
          placeholder="Your todo here"
          value={todo}
        ></input>
      </div>
      <div>
        <button className="btn-add" type="submit" onClick={handleSubmit}>
          ADD 
        </button>
      </div>
    </div>
  );
};

export default Todo;
