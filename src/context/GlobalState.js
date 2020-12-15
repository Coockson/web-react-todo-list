import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
import {v4 as uuid} from 'uuid'


// Initial state
const initialState = {
    todos: [
 /*       {
            id: uuid(),
            title: 'Take out trash',
            completed: false
        },
        {
            id: uuid(),
            title: 'Run',
            completed: true
        }*/
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //Actions
    function deleteTodo(id) {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }

    function addTodo(todo) {
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }

    function toggleComplete(id) {
        dispatch({
            type: 'TOGGLE_COMPLETE',
            payload: id
        })
    }

    function initializeList(todos) {
        dispatch({
            type: 'INITIALIZE',
            payload: todos
        })
    }

    return(<GlobalContext.Provider value={{
        todos:state.todos,
        deleteTodo,
        addTodo,
        toggleComplete,
        initializeList
        }}>
        {children}
    </GlobalContext.Provider>)
}