import React from 'react';
import {Text, View} from 'react-native';

const GreetMsg = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <GreetMsg name="Maru" />
    </View>
  );
}

export default Cafe;
