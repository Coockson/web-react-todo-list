export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case 'TOGGLE_COMPLETE':
            console.log("DEBUG | Toggle payload", action)
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload){
                        var newtodo = {
                            id: todo.id,
                            title: todo.title,
                            completed: !todo.completed
                        } 
                        // For some reason todo.completed = !todo.completed didnt work
                        console.log("DEBUG | Toggle payload found todo", newtodo);
                        return newtodo
                    }
                    return todo
                })
            }
        case 'INITIALIZE':
            console.log(action)
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}