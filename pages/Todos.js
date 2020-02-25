import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import { addTodo, removeTodo, changeTodosCheckedProp } from '../store/todos';
import Todo from '../components/Todo';

function Todos({todos, addTodo, removeTodo, toggleTodo}) {

    const renderTodos = (todo)=> <Todo todo={todo} onChange={toggleTodo} onRemove={removeTodo}/>;

    return (
        <Layout
        listData={todos}
        renderListItem={renderTodos}
        onModalSubmit={addTodo}
        modalTitle="Nova Tarefa"
        />
    );

}

const mapStateToProps = (state, ownProps) => ({
    todos: state.lists[ownProps.route.params.list.id].todos.map(id=>state.todos[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: (text)=> dispatch(addTodo(text, ownProps.route.params.list.id)),
    removeTodo: (id)=> dispatch(removeTodo(id, ownProps.route.params.list.id)),
    toggleTodo: (id)=> dispatch(changeTodosCheckedProp(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Todos);