import notebooks,{addNotebook, removeNotebook} from "../store/notebooks";
import {addList, removeList} from "../store/lists";


describe('notebooks reducers tests', ()=> {

    test('add new notebook test',()=>{

        const addNotebookAction = addNotebook('casa');
        const newNotebook = addNotebookAction.payload;
        const newState = notebooks({},addNotebookAction);
        expect(newState[newNotebook.id]).toEqual(newNotebook);

    });

    test('remove notebook test',()=>{

        const state = Object.freeze({ 
            'ABCD1234': {
                id: 'ABCD1234',
                name: 'casa'
            }
        });

        const removeNotebookAction = removeNotebook('ABCD1234');
        const newState = notebooks(state,removeNotebookAction);
        expect(newState).toEqual({});

    });

    test('add list test',()=>{
        
        const state = Object.freeze({ 
            'ABCD1234': {
                id: 'ABCD1234',
                name: 'casa',
                lists: Object.freeze([])
            }
        });
        const addListAction = addList('compras','ABCD1234');
        const newList = addListAction.payload;
        const newState = notebooks(state,addListAction);
        expect(newState['ABCD1234'].lists).toContain(newList.id);
    });

    test('remove list test',()=>{
        
        const state = Object.freeze({ 
            'ABCD1234': {
                id: 'ABCD1234',
                name: 'casa',
                lists: Object.freeze(['EFGH5678'])
            }
        });
        const removeListAction = removeList('EFGH5678','ABCD1234');
        const newState = notebooks(state,removeListAction);
        expect(newState['ABCD1234'].lists).not.toContain('EFGH5678');

    });


});