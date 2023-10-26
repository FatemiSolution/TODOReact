import {createContext, useContext} from 'react'

export const TodoContext = createContext({

    //in this we create an over all structure of the functionality and functions
    todos:[{
        id:1,
        todo:'todo msg',
        completed: false,
    }],
    // iniating functions to be used 
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo:(id,todd)=>{},
    toggleComplete:(id)=>{},
})
// custom hook 
export const useTODO = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider