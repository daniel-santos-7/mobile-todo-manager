import React from 'react';
import {Modal,View,Text,TextInput, StyleSheet, TouchableHighlight} from 'react-native';

export default function FormModal({visible, inputText, onInputTextChange, buttonText, onButtonPress}) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.formContainer}>
            <TextInput style={styles.input}/>
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({

    formContainer: {
        flex: 1,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(250,250,250,.9)',
    },

    input: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 2,
        padding: 2,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#ccc',
    },

    button: {
        width: '100%',
        padding: 2,
        backgroundColor: '#505',
        padding: 10,
        margin: 5,
        borderRadius: 2,
        alignItems: 'center',
    },

    buttonText: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontWeight: 'bold',
    }

});