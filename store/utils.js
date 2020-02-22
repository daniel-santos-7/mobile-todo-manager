export function generateId(prefix) {
    return prefix +'-'+ Math.random().toString(36).toUpperCase().slice(2,12);
}

export function createItem(state={}, action) {
    const newState = {...state};
    const newItem = {...action.payload};
    newState[newItem.id] = newItem;
    return newState;
}

export function deleteItem(state={}, action) {

    const newState = {...state};
    const itemId = action.payload.id;
    delete newState[itemId];
    return newState;

}

export function addSubitemId(state=[],action) {
    return state.concat(action.payload.id);
}

export function removeSubitemId(state=[],action) {
    return state.filter(id=>id!=action.payload.id);
}