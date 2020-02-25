import {StyleSheet} from 'react-native';

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

  export default styles;