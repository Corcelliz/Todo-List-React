import React,{useState} from 'react';
import "./style.css";

const NewTodo = ({ onNewTodo }) => {

  const [value, setValue] = useState('');

  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const submit = () => {
    
    if(onNewTodo) {
      onNewTodo(value)
      erase();
    }
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

  return (
  <input
  className="new-todo"
  placeholder="O que precisa ser feito?"
  value={value}
  onChange={onChange}
  onKeyDown={onKeyDown}
/>
)}

export default NewTodo; 
