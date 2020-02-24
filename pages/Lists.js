import React from 'react';
import {StyleSheet, FlatList,View, Text} from 'react-native';
import Container from "../components/Container";
import CustomList from "../components/CustomList";
import CustomItem from "../components/CustomItem";

export default function Notebooks() {
    
  return (
    <Container>
      <CustomList data={['Caderno 1', 'Caderno 2']} renderItem={(e)=><CustomItem notebook={e}/>}/>
    </Container>
  );

}