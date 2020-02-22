import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PopupMenu from './PopupMenu';

export default function NotebookItem({ notebook }) {

  function handleItemActions(event, index) {
    
    if (event === 'itemSelected') {
      
      switch (index) {
        case 0:
          console.log('Renomeando');
          break;
        
        case 1:
          console.log('Removendo');
          break;
      
        default:
          break;
      }

    }

  }

  return (
    <View style={styles.itemContainer}>
        <MaterialCommunityIcons name="notebook" size={28} style={styles.icons} color="#11a"/>
        <View style={styles.itemText}>
          <Text style={styles.itemTitle}>{notebook}</Text>
          <Text style={styles.itemSubtitle}>21/02/2020</Text>
        </View>
        <PopupMenu actions={['Renomear', 'Remover']} onPress={handleItemActions}/>
    </View>
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
  },

  icons: {
    margin: 5,
    borderRadius: 100,
    color: '#fff',
    backgroundColor: '#11e',
    padding: 10,
  }

});