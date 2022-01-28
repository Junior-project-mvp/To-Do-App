import React from "react";

const Todo = ({ todo, handleChange, handleSubmit }) => {

  return (
    <div>
      <input className="input-todo"
        type="text"
        onChange={handleChange}
        placeholder="Your todo here"
        value={todo}
      ></input>

      <button
      className="btn-add"
      type="submit" onClick={()=>handleSubmit()}>
        Add Todo
      </button>
    </div>
  );
};

export default Todo;
