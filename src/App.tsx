import React, {useState} from 'react';
import InputFeild from './inputFeild';
import './styles/App.css';
import  {Todo}  from "./model"
import TodoList from "./todoList";


const App: React.FC = () => {

  const [ todo, setTodo ] = useState<string>("");
  const [ todos, setTodos ] = useState<Todo[]>([])
  
  const handleAdd= (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos,{id:Date.now(), todo:todo,isDone:false}]);
      setTodo("");
    }
  }
  return (
    <div className="App">
      <div className="heading">hello world</div>
      <div><InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} /></div>

      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
