import { generateId, createItem as createNotebook, deleteItem as deleteNotebook, addSubitemId, removeSubitemId } from './utils';
import { ADD_LIST, REMOVE_LIST } from './lists';

export const ADD_NOTEBOOK = 'ADD_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export function addNotebook(name) {
    
    const id = generateId('nb');
    const date = Date.now();

    return {
        type: ADD_NOTEBOOK,
        payload: {
            id,
            name,
            lists: [],
            createdAt: date
        }
    };

}

export function removeNotebook(id) {
    
    return {
        type: REMOVE_NOTEBOOK,
        payload: {
            id
        }
    };

}

function addListId(state={}, action) {

    const { notebookId } = action.payload;
    const notebook = {...state[notebookId]};
    notebook.lists =  addSubitemId(notebook.lists, action);
    const newState = {...state, [notebookId]: notebook};
    return newState;

}

function removeListId(state={}, action) {

    const { notebookId } = action.payload;
    const notebook = {...state[notebookId]};
    notebook.lists =  removeSubitemId(notebook.lists, action);
    const newState = {...state, [notebookId]: notebook};
    return newState;

}

function notebooks(state={},action) {

    const {type} = action;

    switch (type) {

        case ADD_NOTEBOOK:
            return createNotebook(state, action);
        
        case REMOVE_NOTEBOOK:
            return deleteNotebook(state, action);
        
        case ADD_LIST:
            return addListId(state, action);
        
        case REMOVE_LIST:
            return removeListId(state, action);
    
        default:
            return state;
            
    }

}

export default notebooks;