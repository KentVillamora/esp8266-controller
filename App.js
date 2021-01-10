import React from 'react';
import {Text, View} from 'react-native';

const GreetMsg = (props) => {
  return (
    <Text>Hi, I'm {props.name}</Text>
  );
}

const appMain = () => {
  return (
    <View>
     <GreetMsg name="Kent"/>
    </View>
  );
}

export default appMain;
