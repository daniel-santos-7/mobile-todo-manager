import {createStore, combineReducers} from 'redux';
import notebooks from "./notebooks";
import todos from "./todos";
import lists from "./lists";

const rootReducer = combineReducers({notebooks, todos, lists})

export default createStore(rootReducer);