import React from 'react';
import {Text, View} from 'react-native';

const greetMsg = (props) => {
  return (
    <View>
      <Text>Hi, I'm {props.name}</Text>
    </View>
  );
}

const appMain = () => {
  return (
    <View>
      <Text>Hello World!</Text>
      <greetMsg name="Kent"/>
    </View>
  );
}

export default appMain;
