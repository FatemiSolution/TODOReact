import React,{useState} from 'react'
import { useTODO } from '../contexts/TodoContext'
// this value will be provided once you click on a specific TodoItem
function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
//   initialy the todoMsg value is its current value 
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTODO()
// function for adding the todo 
  const editTodo = () => {
    // giving the vallues for updating the todo  
    updateTodo(todo.id, {...todo, todo: todoMsg})
    // once updated connvert intoo false 
    setIsTodoEditable(false)
  }

//   function for toglling the complete 
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            // giving the css according to the condition
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
        {/* checkbox for complete or not  */}
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
            //   this will change the complete status
              onChange={toggleCompleted}
          />
          {/* input for view and aded text  */}
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                // giving the css according to the condition
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
            //   it is readonly if todo is not editable 
              readOnly={!isTodoEditable}
            //   if todo is editable than input text will be updated 
              onChange={(e) => setTodoMsg(e.target.value)}
          />

          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                // the button will be null if the item is completed 
                  if (todo.completed) return;
                  if (isTodoEditable) {
                      editTodo();
                      // if it is not editable than it will be editable and vice versa 
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
