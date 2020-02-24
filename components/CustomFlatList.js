import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

export default CustomFlatList = ({data, children}) => (
    <FlatList 
        style={styles.list}
        data={data}
        renderItem={({item})=>children(item)}
        keyExtractor={(item)=>item.id}
    />
);

const styles = StyleSheet.create({
    list:{
        padding: 10,
        width: '100%',
    }
});