import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PopupMenu from './PopupMenu';
import styles from './itemStyles';

export default function List({ list, onRemove, onPress }) {

  const {id, name, createdAt} = list;
  const createdAtDate = (new Date(createdAt)).toLocaleDateString();

  function handlePopupActions(event, index) {
    
    if (event === 'itemSelected' && index===0) {
      onRemove(id);
    }

  }

  return (
    <TouchableNativeFeedback onPress={()=>onPress(notebook)}>
        <View style={styles.itemContainer}>
        <MaterialCommunityIcons name="format-list-checks" size={28} style={[styles.icons, {borderRadius:5,backgroundColor:'#933'}]}/>
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>{name}</Text>
            <Text style={styles.itemSubtitle}>{createdAtDate}</Text>
          </View>
        <PopupMenu actions={["Remover"]} onPress={handlePopupActions}/>
        </View>
    </TouchableNativeFeedback>
  );
}

