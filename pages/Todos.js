import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import { addTodo, removeTodo } from '../store/todos';
import { Text } from 'react-native';

function Todos({todos, addTodo, removeTodo}) {

    const renderTodos = (todo)=> <Text>{todo.name}</Text>;

    return (
        <Layout
        listData={todos}
        renderListItem={renderTodos}
        onModalSubmit={addTodo}
        />
    );

}

const mapStateToProps = (state, ownProps) => ({
    todos: state.lists[ownProps.route.params.list].todos.map(id=>state.todos[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: (text)=> dispatch(addTodo(text, ownProps.route.params.list)),
    removeTodo: (id)=> dispatch(removeTodo(id, ownProps.route.params.list))
});

export default connect(mapStateToProps,mapDispatchToProps)(Notebooks);