import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import FormModal from '../components/FormModal';
import ActionButton from "react-native-action-button";

export default function Layout({ listData,renderListItem,onModalSubmit }) {

    const [modalVisibility, setModalVisibility] = React.useState(false);

    function handleModalSubmit(text) {
        setModalVisibility(false);
        onModalSubmit(text);
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={listData} renderItem={({item})=>renderListItem(item)} keyExtractor={(item)=> item.id}/>
            <FormModal visible={modalVisibility} onSubmit={handleModalSubmit}/>
            <ActionButton buttonColor="#11e" onPress={()=> setModalVisibility(true)}/>
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
    list:{
        padding: 10,
        width: '100%',
    }
});