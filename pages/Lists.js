import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import { addList, removeList } from '../store/lists';
import List from '../components/List';

function Lists({lists, addList, removeList, navigation}) {

    const navigateToTodosPage = (list)=> navigation.navigate('Todos', {list});

    const renderLists = (list)=> <List list={list} onPress={navigateToTodosPage} onRemove={removeList}/>;

    return (
        <Layout
            listData={lists}
            renderListItem={renderLists}
            onModalSubmit={addList}
            modalTitle="Nova Lista de Tarefas"
        />
    );

}

const mapStateToProps = (state, ownProps) => ({
    lists: state.notebooks[ownProps.route.params.notebook.id].lists.map(id=>state.lists[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addList: (name)=> dispatch(addList(name, ownProps.route.params.notebook.id)),
    removeList: (id)=> dispatch(removeList(id, ownProps.route.params.notebook.id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Lists);