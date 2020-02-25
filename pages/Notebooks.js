import React from 'react';
import Layout from '../components/Layout';
import Notebook from '../components/Notebook';
import {connect} from 'react-redux';
import { addNotebook, removeNotebook } from '../store/notebooks';

function Notebooks({notebooks, addNotebook, removeNotebook, navigation}) {

  const naviagateToListsPage = (notebook)=> navigation.navigate('Lists', {notebook});

  const renderNotebooks = (notebook)=> <Notebook notebook={notebook} onRemove={removeNotebook} onPress={naviagateToListsPage}/>;

  return (
    <Layout
      listData={notebooks}
      renderListItem={renderNotebooks}
      onModalSubmit={addNotebook}
    />
  );

}

const mapStateToProps = (state) => ({

  notebooks: Object.values(state.notebooks) 

});

export default connect(mapStateToProps,{addNotebook, removeNotebook})(Notebooks);