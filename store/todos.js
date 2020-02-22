import {generateId, createItem as creteTodo, deleteItem as deleteTodo} from './utils';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_CHECKED_PROP = 'CHANGE_CHECKED_PROP';


export function addTodo(text, listId) {
    
    const id = generateId('td');

    return {
        type: ADD_TODO,
        payload: {
            id,
            text,
            checked: false,
            listId
        }
    };

}

export function removeTodo(id, listId) {
    
    return {
        type: REMOVE_TODO,
        payload: {
            id,
            listId
        }
    };

}

export function changeTodosCheckedProp(id) {
    
    return {
        type: CHANGE_CHECKED_PROP,
        payload: {
            id
        }
    };

}

function changeCheckedProp(state={}, action) {

    const {id} = action.payload;
    const newState = {...state};
    const todo = {...newState[id]};
    todo.checked = !todo.checked;
    newState[id] = todo;
    return newState;

}

function todos(state={},action) {

    const {type} = action;

    switch (type) {
        
        case ADD_TODO:
            return creteTodo(state, action);
        
        case REMOVE_TODO:
            return deleteTodo(state, action);

        case CHANGE_CHECKED_PROP:
            return changeCheckedProp(state, action)
    
        default:
            return state;
            
    }

}

export default todos;
