import { useLayoutEffect, useState } from 'react'
import { TodoProvider } from './contexts'

import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'

function App() {

  // this todos is an array of multiple todos
 const [todos, setTodos] = useState([])

const addTodo = (todo) =>{
// if we directly add the todo the previous todos would be deleted 
  setTodos((prev)=>[...prev, {id:Date.now(),...todo}])
}

const updateTodo= (id,todo)=>{
  // to find the id in the prev Todo List we use map and once it is true we change the todo with the new todo
setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo:prevTodo)))
}

const deleteTodo = (id)=>{
  // in this we used filter function to remove or delete the todo with the same id 
  setTodos((prev)=> prev.filter((prevTodo)=>(prevTodo.id !== id )))
}

const toggleComplete = (id)=>{
  // in this first we find the prev Todo with same id and then we changed the completed by using turnary operator first we paste all the value of prevTodo and then reversed the reversed the completed option
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id? {...prevTodo, completed: !prevTodo.completed}:prevTodo)))
}

// this will run when the appliication wll first start 
useEffect(() => {
  // this will get the todo from the local Storage
 const todos = JSON.parse(localStorage.getItem('todos'))
// this will set the todos once we get it from the local Storage
 if(todos && todos.length> 0){
  setTodos(todos)
 }
}, [])
// this will run when ever the todo will be updated 
useEffect(() => {
  // localStorage requires string value 
localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
    <div>
      <div>
        <h1>
          Manage Your TODO
        </h1>
        <div>
          <TodoForm/>
        </div>
        <div>
          {todos.map((todo)=>(
            <div key={todo.id} className='w-full'>
              <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
