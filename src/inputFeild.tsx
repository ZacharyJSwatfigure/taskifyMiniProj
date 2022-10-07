import React, {useState} from 'react';
import "./input.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ( {todo, setTodo, handleAdd}: Props ) => {


  console.log(todo);


  return (
    <form className="form-feild" onSubmit={handleAdd}>
      <input 
        value={todo} 
        onChange={(e) => {
          setTodo(e.target.value)
          }
        } 
        className="input-feild-user" 
        placeholder="Enter a Task">


        </input>
      <button className="input-submit-button" type="submit">Add Task</button>
    </form>
  )
}

export default InputFeild;