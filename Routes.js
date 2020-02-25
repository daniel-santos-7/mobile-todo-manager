import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Notebooks from './pages/Notebooks';
import Lists from './pages/Lists';
import Todos from './pages/Todos';

const Stack = createStackNavigator();

export default function Routes() {
  
  const screenOptions = {
    headerTitleAlign:'center',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#505',
    },
    headerTitleStyle: {
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    }
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Notebooks" component={Notebooks} options={{title:'Cadernos'}}/>
        <Stack.Screen name="Lists" component={Lists} options={ ({ route })=> ({ title: route.params.notebook.name })}/>
        <Stack.Screen name="Todos" component={Todos} options={({ route }) => ({ title: route.params.list.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}