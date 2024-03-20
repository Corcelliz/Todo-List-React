import { IoMdTrash } from 'react-icons/io';
import React, { useState } from 'react';

import './App.css';

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const submit = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);

    erase();
  };

  const erase = () => {
    setValue('');
  };
  
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      console.log('submit', value);
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const onToggle = (todo) => {
    setTodos(
    todos.map((obj) => (obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj)));

  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id))
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Todo</h1>
      </header>
      <section className="main">
        <input
          className="new-todo"
          placeholder="O que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={['todo', todo.checked ? 'checked' : ""].join(" ")}  
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
                onClick={() => onRemove(todo)}>
                <IoMdTrash size={28}/>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
