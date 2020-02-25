import React from 'react';
import {Text, View} from 'react-native';
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import { addList, removeList } from '../store/lists';
import List from '../components/List';

function Lists({lists, addList, removeList, navigation}) {

    const navigateToTodosPage = (list)=> navigation.navigate('Todos', {list: list.id});

    const renderLists = (list)=> <List list={list}/>;

    return (
        <Layout
            listData={lists}
            renderListItem={renderLists}
            onModalSubmit={addList}
            onPress={navigateToTodosPage}
        />
    );

}

const mapStateToProps = (state, ownProps) => ({
    lists: state.notebooks[ownProps.route.params.notebook].lists.map(id=>state.lists[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addList: (name)=> dispatch(addList(name, ownProps.route.params.notebook)),
    removeList: (id)=> dispatch(removeList(id, ownProps.route.params.notebook))
});

export default connect(mapStateToProps,mapDispatchToProps)(Lists);