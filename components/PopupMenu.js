import React from 'react';
import { UIManager, TouchableOpacity, View, findNodeHandle } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function PopupMenu({actions, onPress}) {
    
    const icon = React.useRef();

    function onError() {
        console.log('error');
    }

    function showMenu() {
        UIManager.showPopupMenu(findNodeHandle(icon.current),actions, onError, onPress);
    }
  
    return (
        <View>
            <TouchableOpacity onPress={showMenu}>
                <MaterialIcons name="more-vert" size={28} ref={icon}/>
            </TouchableOpacity>
        </View>
    );
}
