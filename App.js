import React from 'react';
import {Text, View} from 'react-native';

const greetMsg = () => {
 return(
  <View>
   <Text>Hi, I am {props.name}</Text>
  </View>
 );
}

const appMain = () => {
 return (
  <View>
   <greetMsg name="Kent" />
  </View>
 );
}

export default appMain;
