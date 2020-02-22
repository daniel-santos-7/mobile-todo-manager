import lists, {addList, removeList} from "../store/lists";
import {addTodo, removeTodo} from "../store/todos";


describe('lists reducers tests', ()=> {

    test('add new list test',()=>{

        const addListAction = addList('compras','casa');
        const newList = addListAction.payload;
        const newState = lists({},addListAction);
        expect(newState[newList.id]).toEqual(newList);

    });

    test('remove list test',()=>{

        const state = Object.freeze({ 
            'EFGH5678': {
                id: 'EFGH5678',
                name: 'compras'
            }
        });

        const removeListAction = removeList('EFGH5678','ABCD1234');
        const newState = lists(state,removeListAction);
        expect(newState).toEqual({});

    });

    test('add todo test',()=>{
        
        const state = Object.freeze({ 
            'EFGH5678': {
                id: 'EFGH5678',
                name: 'casa',
                todos: Object.freeze([])
            }
        });
        const addTodoAction = addTodo('café','EFGH5678');
        const newTodo = addTodoAction.payload;
        const newState = lists(state,addTodoAction);
        expect(newState['EFGH5678'].todos).toContain(newTodo.id);

    });

    test('remove todo test',()=>{
        
        const state = Object.freeze({ 
            'EFGH5678': {
                id: 'EFGH5678',
                name: 'casa',
                todos: Object.freeze(['IJKL9123'])
            }
        });
        const removeTodoAction = removeTodo('IJKL9123','EFGH5678');
        const newState = lists(state,removeTodoAction);
        expect(newState['EFGH5678'].todos).not.toContain('IJKL9123');

    });


});