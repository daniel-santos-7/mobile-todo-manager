import React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './Routes';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {

  //const unsubscribe = store.subscribe(()=>console.log(store.getState()));

  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}