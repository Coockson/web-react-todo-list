import React, { useContext }  from 'react';
import { GlobalContext} from '../context/GlobalState';
import TodoItem from './TodoItem';

function Todos() {

// You can access the data from here    
//    const context = useContext(GlobalContext);
//    console.log("Ses", context)

    const { todos,  addTodo } = useContext(GlobalContext);

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}

            <button onClick={() => addTodo({'id':4,'title':'ses','completed':false})}>sesify</button>

        </div>   
    );
}

export default Todos;
