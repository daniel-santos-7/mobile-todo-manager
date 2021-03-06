import React from 'react';
import {StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Item from './Item';

export default function Notebook({ notebook, onRemove, onPress }) {

  const {id, name, createdAt} = notebook;
  const createdAtDate = (new Date(createdAt)).toLocaleDateString();

  const companion = <MaterialCommunityIcons name="notebook" size={28} style={styles.icon} color="#11a"/>

  return (
    <Item
      title={name}
      subtitle={createdAtDate}
      companion={companion}
      onRemove={()=>onRemove(id)}
      onPress={()=>onPress(notebook)}
    />);
}

const styles = StyleSheet.create({
  icon: {
    margin: 5,
    borderRadius: 100,
    color: '#fff',
    backgroundColor: '#11e',
    padding: 10,
  }
});