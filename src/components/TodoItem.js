import React, { useContext} from 'react'
import { GlobalContext} from '../context/GlobalState';


export default function TodoItem({todo}) {

    const { completeStat, toggleComplete } = useContext(GlobalContext);
    const { dummy2, deleteTodo } = useContext(GlobalContext);


    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: todo.completed ? 'line-through' : 'none'
        }
    }

    const toggleCheck = () => {
        toggleComplete(todo.id)
    }

    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }

    return (
        <div style={getStyle()}>
            <p>
                <input 
                    type="checkbox" 
                    onChange={() => toggleCheck()} 
                    defaultChecked={todo.completed}
                /> 
                {'  '}
                {todo.title} 
                <button onClick={() => deleteTodo(todo.id)} style={btnStyle}>x</button>
            </p>
        </div>
    )
}