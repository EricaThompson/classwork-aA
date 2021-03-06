import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';

const preloadedState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    }
}

const todosReducer = (currentState = preloadedState, action)=>{
    Object.freeze(currentState);
    let nextState = Object.assign({}, currentState);
    switch (action.type) {
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case RECEIVE_TODOS:
            // nextState[action.todos]
            //iterate over array, include in new obj where key is idx in array
            let newTodos = {}
            action.todos.forEach((todo, idx) => {
                newTodos[idx] = todo;
            });
            nextState = newTodos;
            return nextState
        default:
            return currentState;
    }
}

export default todosReducer;