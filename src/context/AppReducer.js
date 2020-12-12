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
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}