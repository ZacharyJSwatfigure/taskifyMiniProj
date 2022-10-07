import React from 'react';
import "./input.css";

const InputFeild: React.FC = () => {
  console.log(InputFeild);
  return (
    <form className="form-feild">
      <input className="input-feild-user" placeholder="Enter a Task"></input>
      <button className="input-submit-button" type="submit">Add Task</button>
    </form>
  )
}

export default InputFeild;