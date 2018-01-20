import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = (props) => {
  const { title, done, desc } = props.todo;
  const { CardStyle, TitleStyle, IconContainerStyle, IconStyle, DoneTextStyle, DescStyle } = styles;
  return (
    <View style={CardStyle}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Icon style={IconStyle} name={done ? 'check-square-o' : 'square-o'} size={28} />
          </TouchableOpacity>
          <Text style={done ? { ...TitleStyle, ...DoneTextStyle } : TitleStyle}>{title}</Text>
        </View>
          <Text style={DescStyle}>{desc}</Text>
      </View>
      <View style={IconContainerStyle}>
        <TouchableOpacity>
          <Icon style={IconStyle} name='trash' size={26} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon style={IconStyle} name='edit' size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = {
  CardStyle: {
    borderColor: '#003B46',
    borderWidth: 2,
    borderRadius: 7.5,
    padding: 15,
    margin: 10,
    marginBottom: 5,
    backgroundColor: 'rgba(0,0,0,.04)'
  },
  TitleStyle: {
    fontSize: 26,
    color: '#000',
    marginLeft: 10
  },
  DescStyle: {
    fontSize: 20,
    color: '#aaa',
    paddingLeft: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#66A5AD',
    paddingBottom: 3,
  },
  DoneTextStyle: {
    color: '#66A5AD',
    textDecorationLine: 'line-through',
  },
  IconContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
},
IconStyle: {
  marginTop: 7,
  marginLeft: 10,
  color: '#07575B'
}
};
export { Card };
