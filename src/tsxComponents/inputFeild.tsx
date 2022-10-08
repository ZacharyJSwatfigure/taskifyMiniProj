import React, {useRef} from 'react';
import "../styles/input.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ( {todo, setTodo, handleAdd}: Props ) => {

  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className="form-feild" 
    onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur();
    }}>
      <input 
        ref={inputRef}
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