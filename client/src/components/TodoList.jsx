import React from "react";


const TodoList = ({ value, handleDelete, id}) => {

  return (
    <div>
              <li>
               {value}
                <button className="delete-btn" onClick={()=>handleDelete(id)}>
                  <i>X</i>
                </button>
                <button className="edit-btn">
                <i>Complete</i>
                </button>
              </li>
    </div>
  );
};

export default TodoList;
