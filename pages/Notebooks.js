import React, { useState } from 'react';
import {Modal, Text} from 'react-native';
import Container from "../components/Container";
import CustomFlatList from "../components/CustomFlatList";
import Notebook from "../components/Notebook";
import FormModal from '../components/FormModal';
import ActionButton from "react-native-action-button";

export default function Notebooks() {
    
  const [modalvisibility, setModalVisibility] = useState(false);

  return (
    <Container>
      <CustomFlatList data={['Caderno 1', 'Caderno 2']}>
        { (notebook)=> <Notebook name={notebook}/> }
      </CustomFlatList>
      <FormModal visible={modalvisibility} buttonText="Salvar"/>
      <ActionButton buttonColor="#11e" onPress={()=> setModalVisibility(true)}/>
    </Container>
  );

}