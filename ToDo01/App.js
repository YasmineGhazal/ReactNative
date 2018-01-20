import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Header, List } from './components';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor="#003B46"
          />
        <Header HeaderText="my To-Do list" />
        <List />
      </View>
    );
  }
}
