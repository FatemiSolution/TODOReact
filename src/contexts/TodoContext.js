import {createContex, useContext} from 'react'

export const TodoContext = createContex({
    //in this we create an over all structure of the functionality and functions
    todos:[{
        id:1,
        todo:'todo msg',
        completed: false,
    }],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo:(id,todd)=>{},
    toggleComplete:(id)=>{},
})

export const useTODO = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.TodoProvider