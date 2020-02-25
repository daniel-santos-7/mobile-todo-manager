import React from 'react';
import {StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Item from './Item';

export default function List({ list, onRemove, onPress }) {

  const {id,name, createdAt} = list;
  const createdAtDate = (new Date(createdAt)).toLocaleDateString();
  const companion = <MaterialCommunityIcons name="format-list-checks" size={28} style={styles.icon}/>

  return (
    <Item
      item={list}
      title={name}
      subtitle={createdAtDate}
      companion={companion}
      onPress={()=>onPress(list)}
      onRemove={()=>onRemove(id)}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    margin: 5,
    borderRadius: 5,
    color: '#fff',
    backgroundColor: '#933',
    padding: 10,
  }
});