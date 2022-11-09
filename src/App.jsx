import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos]= useState([]);

  const [todo, setTodo]= useState("");

  const [todoEdit, setTodoEdit]= useState(null);

  const [editText, setEditText]= useState("");

  function handleSubmit(e){
    e.preventDefault();

    const newTodo= {
      id: Math.floor(Math.random() *1000),
      text: todo,
    }

    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id){
    const updatedTodos= [...todos].filter((todo)=> todo.id !== id);
    setTodos(updatedTodos);
  }

  function editTodo(id)
  {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id){
        todo.text= editText;
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEdit(null)
    setEditText("")
  }
  return (
    <div className="todo-app">

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> setTodo(e.target.value)} value={todo}  />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo)=> <div key={todo.id}>

        {todoEdit === todo.id ?
         (<input type="text" placeholder={todo.text} onChange={(e) => setEditText(e.target.value)} value={editText}  />) 
        : (<div className='show' > {todo.text} </div>)}
       

       

       <button onClick={()=> deleteTodo(todo.id)}>Delete</button>

        {todoEdit === todo.id ? (<button onClick={()=> editTodo(todo.id)}>Save</button>) : (<button onClick={()=> setTodoEdit(todo.id)}>Edit Todo</button>)}

       
       
       </div>)}
       
    </div>
  );
}

export default App;
