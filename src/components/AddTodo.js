import React,  { useContext, useState } from 'react'
import { GlobalContext} from '../context/GlobalState';
import {v4 as uuid} from 'uuid'

export default function AddTodo() {

    const { todos,  addTodo } = useContext(GlobalContext);
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        var new_todo= {
            id: uuid(),
            title: title,
            completed: false
        }
        addTodo(new_todo)
        setTitle('');
        console.log("DEBUG | New todo created", new_todo)
    };

    return (
        <form onSubmit={onSubmit} style={{display: 'flex'}}>
            <input 
                type="text" 
                name="title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                style={{flex: '10', padding: '5px'}} 
                placeholder="Add Todo ..."/>
            <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{flex: '1'}}/>
        </form>
    )
}
