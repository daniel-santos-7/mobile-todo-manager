import React from 'react';
import {CheckBox} from 'react-native';
import Item from './Item';

export default function List({ todo, onRemove, onChange }) {

    const {id, text, checked} = todo;

    const companion = <CheckBox value={checked} onValueChange={()=>onChange(id)}/>

    return (
        <Item
            item={todo}
            title={text}
            companion={companion}
            onRemove={onRemove}
        />
    );
}

