import todos,{addTodo, removeTodo, changeTodosCheckedProp} from "../store/todos";

describe('todos reducers tests', ()=> {

    test('add new todo test',()=>{

        const addTodoAction = addTodo('café','EFGH5678');
        const newTodo = addTodoAction.payload;
        const newState = todos({},addTodoAction);
        expect(newState[newTodo.id]).toEqual(newTodo);

    });

    test('remove todo test',()=>{

        const state = Object.freeze({ 
            'IJKL9123': {
                id: 'IJKL9123',
                text: 'café'
            }
        });

        const removeTodoAction = removeTodo('IJKL9123','EFGH5678');
        const newState = todos(state,removeTodoAction);
        expect(newState).toEqual({});

    });

    test('check todo test',()=>{

        const state = Object.freeze({ 
            'IJKL9123': {
                id: 'IJKL9123',
                text: 'café',
                checked: false
            }
        });

        const checkTodoAction = changeTodosCheckedProp('IJKL9123');
        const newState = todos(state,checkTodoAction);
        expect(newState['IJKL9123'].checked).toBe(true);

    });

    test('uncheck todo test',()=>{

        const state = Object.freeze({ 
            'IJKL9123': {
                id: 'IJKL9123',
                text: 'café',
                checked: true
            }
        });

        const uncheckTodoAction = changeTodosCheckedProp('IJKL9123');
        const newState = todos(state,uncheckTodoAction);
        expect(newState['IJKL9123'].checked).toBe(false);

    });


});