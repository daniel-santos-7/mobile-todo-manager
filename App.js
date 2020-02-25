import React from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import store from './store';
import { YellowBox } from 'react-native';

export default function App() {
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}