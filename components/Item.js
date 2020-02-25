import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import PopupMenu from './PopupMenu';

export default function Notebook({ item, title, subtitle, companion, onRemove, onPress }) {

  function handlePopupActions(event, index) {
    
    if (event === 'itemSelected' && index===0 && onRemove) {
      onRemove(item.id);
    }

  }

  function handlePress() {
      if (onPress) {
          onPress(item);
      }
  }

  return (
    <TouchableNativeFeedback onPress={handlePress}>
        <View style={styles.itemContainer}>
        {companion}
          <View style={styles.itemText}>
            {title && <Text style={styles.itemTitle}>{title}</Text>}
            {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
          </View>
        <PopupMenu actions={["Remover"]} onPress={handlePopupActions}/>
        </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({

    itemContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      width: '100%',
      backgroundColor: '#fff',
      padding: 15,
      marginVertical: 2,
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
    },
  
    itemText: {
      flex: 1,
      marginHorizontal: 10,
      textAlign: 'left'
    },
  
    itemTitle: {
      fontFamily: 'Roboto',
      fontSize: 20,
      marginVertical: 1,
    },
  
    itemSubtitle: {
      fontFamily: 'Roboto',
      fontSize: 15,
      color: '#555'
    }
  
});