import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
  const { TextStyle, ViewStyle, IconStyle } = styles;
  return (
  <View style={ViewStyle}>
    <Text style={TextStyle}>
      {props.HeaderText}
    </Text>
    <TouchableOpacity>
      <Icon style={IconStyle} name='plus-circle' size={50} />
    </TouchableOpacity>
  </View>
);
};

const styles = {
  TextStyle: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: '#003B46',
  },
  ViewStyle: {
    backgroundColor: 'rgba(196,223,230,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row'
  },
  IconStyle: {
    paddingRight: 10,
    color: '#07575B'
  }
};

export { Header };
