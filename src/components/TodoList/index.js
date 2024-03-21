import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import "./style.css";

const TodoList = ({ todos, onToggle, onRemove }) => {

    
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          <span
            className={['todo', todo.checked ? 'checked' : ''].join(' ')}
            onClick={() => onToggle(todo)}
            onKeyPress={() => onToggle(todo)}
            role="button"
            tabIndex={0}
          >
            {todo.title}
          </span>
          <button
            type="button"
            className="remove"
            onClick={() => onRemove(todo)}
          >
            <IoMdTrash size={28} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
