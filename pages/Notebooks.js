import React from 'react';
import {StyleSheet, FlatList,View, Text} from 'react-native';
import NotebookItem from "../components/NotebookItem";

export default function Notebooks() {
  
  const data = ['Caderno 1', 'Caderno 2', 'Caderno 3'];
  
  return (
    <View style={styles.container}>
      <FlatList style={styles.notebookList} data={data} renderItem={({item})=> <NotebookItem notebook={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notebookList: {
    padding: 10,
    width: '100%',
  }
});