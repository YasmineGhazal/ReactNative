import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { TextStyle, ViewStyle } = styles;
  return (
  <View style={ViewStyle}>
    <Text style={TextStyle}>
      {props.HeaderText}
    </Text>
  </View>
);
};

const styles = {
  TextStyle: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: '#000'
  },
  ViewStyle: {
    backgroundColor: '#FFF7E2',
    borderBottomColor: '#CDC3B0',
    opacity: 0.5,
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
