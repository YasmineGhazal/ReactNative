import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Header } from './src/components';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
          <StatusBar
            backgroundColor="#CDC3B0"
          />
        <Header HeaderText="ToDo" />
      </View>
    );
  }
}
