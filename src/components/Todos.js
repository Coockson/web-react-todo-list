import React, { useContext,useEffect,useState }  from 'react';
import { GlobalContext} from '../context/GlobalState';
import TodoItem from './TodoItem';
import axios from 'axios';

function Todos() {

// You can access the data from here    
//    const context = useContext(GlobalContext);
//    console.log("Ses", context)

    const [isOnline, setIsOnline] = useState(false);
    const { todos,  addTodo } = useContext(GlobalContext);
    const { initList,  initializeList } = useContext(GlobalContext);

    const getData = async () => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => {
                console.log(res.data);
                initializeList(res.data);
                setIsOnline(true);
            });
    }

	useEffect(() => {
        getData();
    }, [])

    if (!isOnline) {
        return (<span>loading...</span>);
    }
    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>   
    );
    
    
}

export default Todos;
