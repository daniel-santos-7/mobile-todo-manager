import { generateId, createItem as createList, deleteItem as deleteList, addSubitemId, removeSubitemId } from './utils';
import { ADD_TODO, REMOVE_TODO } from './todos';

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export function addList(name, notebookId) {
    
    const id = generateId('lt');
    const date = Date.now();

    return {
        type: ADD_LIST,
        payload: {
            id,
            name,
            todos:[],
            createdAt: date,
            notebookId
        }
    };

}

export function removeList(id, notebookId) {
    
    return {
        type: REMOVE_LIST,
        payload: {
            id,
            notebookId
        }
    };

}

function addTodoId(state={}, action) {

    const { listId } = action.payload;
    const list = {...state[listId]};
    list.todos =  addSubitemId(list.todos, action);
    const newState = {...state, [listId]: list};
    return newState;

}

function removeTodoId(state={}, action) {

    const { listId } = action.payload;
    const list = {...state[listId]};
    list.todos =  removeSubitemId(list.todos, action);
    const newState = {...state, [listId]: list};
    return newState;

}

function lists(state={},action) {

    const {type} = action;

    switch (type) {

        case ADD_LIST:
            return createList(state, action);
        
        case REMOVE_LIST:
            return deleteList(state, action);
        
        case ADD_TODO:
            return addTodoId(state, action);
        
        case REMOVE_TODO:
            return removeTodoId(state, action);
    
        default:
            return state;
            
    }

}

export default lists;