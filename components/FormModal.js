import React from 'react';
import {Modal,View,Text,TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default function FormModal({title,visible, onSubmit}) {

    const [text, setText] = React.useState('');

    function handlePress() {
        
        if (text === '') {
            return;
        }

        onSubmit(text);
        setText('');
    }

    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <TextInput style={styles.input} onChangeText={setText}>{text}</TextInput>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={handlePress}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(50,50,50,.5)',
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        fontSize: 15,
    },

    container: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 5
    },

    input: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 2,
        padding: 2,
        backgroundColor: '#fff',
        borderColor: '#ccc',
    },

    button: {
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